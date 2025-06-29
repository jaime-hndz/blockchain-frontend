// import { checkEndSurveyDate, checkSurveyDates } from "@/helpers/checkSurveyDates";
import { fetchAPI } from "@/helpers/fetch";
import { admin, user } from "@/helpers/UserProvider";
import React, { useContext, useEffect, useState } from "react";
const TESTING = import.meta.env.VITE_TESTING === "true";
import { Button, Space } from 'antd';
import { message } from "antd";

const surveyContext = React.createContext({});

const defaultCurrentSurvey = {
    id: Date.now(),
    name: "",
    candidates: [
      { id: Date.now() + 1, name: "", votes: 0, selected: false },
      { id: Date.now() + 2, name: "", votes: 0, selected: false },
    ],
    starts: new Date().toISOString(),
    ends: new Date().toISOString(),
    opened: false,
  }

export const SurveyContextProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSurvey, setCurrentSurvey] = useState(defaultCurrentSurvey);
  const [messageApi, contexHolder] = message.useMessage();

  useEffect(() => {
  }, []);

  const fetchSurveys = async () => {
    if (!TESTING) {
      try {
        setLoading(true);
        await fetchAPI("/encuestas", {}, "GET").then((res) => {
          console.log(res);
          setSurveys(
            res.map((s) => ({
              id: s.id,
              name: s.nombre,
              candidates: s.candidatos.map((c) => ({
                id: c.id,
                idEncuesta: c.idEncuesta,
                name: c.nombre,
                votes: c.votos || 0,
                selected: false,
                color: c.color || "",
              })),
              starts: s.abre || 0,
              ends: s.cierra || 0,
              created: true,
            }))
          );
          setLoading(false);
        }).catch((error) => {
          setLoading(false);
          console.error("Error al obtener encuestas:", error);

          messageApi.error('He ocurrido un error al obtener las encuestas')
        });
      } catch (error) {
        setLoading(false);
        console.error("Error al obtener encuestas:", error);
      }
    } else {
      setSurveys([
        {
          id: 1,
          name: "Encuesta 1",
          candidates: [
            { id: 11231, name: "Candidato 1", votes: 0, selected: false },
            { id: 11221, name: "Candidato 2", votes: 0, selected: false },
          ],
          starts: 0,
          ends: 0,
          opened: true,
          created: true,
        },
        {
          id: 2,
          name: "Encuesta 2",
          candidates: [
            { id: 11231, name: "Candidato Y", votes: 0, selected: false },
            { id: 11221, name: "Candidato X", votes: 0, selected: false },
          ],
          starts: 0,
          ends: 0,
          opened: false,
          created: true,
        },
        {
          id: 3,
          name: "Encuesta 3",
          candidates: [
            { id: 11231, name: "Candidato A", votes: 0, selected: false },
            { id: 11221, name: "Candidato B", votes: 0, selected: false },
          ],
          starts: 0,
          ends: 0,
          opened: false,
          created: true,
        },
      ]);
    }
  };

  const updateSurvey = async (extraFields = {}) => {
    const updatedSurvey = { ...currentSurvey, ...extraFields };
    // const exists = surveys.some((s) => s.id === currentSurvey.id);

    if (!TESTING) {
      const mappedUpdatedSurvey = {
        id: updatedSurvey.id,
        nombre: updatedSurvey.name,
        candidatos: updatedSurvey.candidates.map((c) => ({
          id: c.id,
          idEncuesta: updatedSurvey.id,
          nombre: c.name,
          votos: c.votes || 0,
          color: c.color || ""
        })),
        abre: updatedSurvey.starts,
        cierra: updatedSurvey.ends,
        abierto: updatedSurvey.opened || false,
      };


      try {
        setLoading(true);
        await fetchAPI("/encuesta", mappedUpdatedSurvey, "POST").then((res) => {
          console.log("Encuesta actualizada o creada:", res);
          fetchSurveys();
          setLoading(false);
          messageApi.success('Encuesta actualizada o creada correctamente')
        }).catch((error) => {
          console.error("Error al actualizar o crear encuesta:", error);
          setLoading(false)
          messageApi.error('Error al actualizar')}); ;
      } catch (error) {
        console.error("Error al actualizar o crear encuesta:", error);
        setLoading(false);
        return;
      }
    }



    // if (exists) {
    //   setSurveys(
    //     surveys.map((s) =>
    //       s.id === currentSurvey.id ? updatedSurvey : s
    //     )
    //   );
    // } else {
    //   setSurveys([
    //     ...surveys,
    //     { ...updatedSurvey, created: true },
    //   ]);
    // }
  };

      const voteCandidate = async () => {

        setLoading(true);
        var selected = currentSurvey.candidates.find((c) => c.selected);

        if (!selected) {
          console.error("No candidate selected for voting.");
          return;
        }

        const { cedula } = JSON.parse(user)
        var vote = {
          categoria: currentSurvey.name,
          idPostulante: selected.id,
          cedula: cedula
        }

        console.log("Voting for candidate:", vote);
        await fetchAPI("/candidato/votar/", vote, "POST").then((res) => {
          console.log("Vote response:", res);
          setLoading(false);
          messageApi.success('Voto registrado correctamente')
        }).catch((error) => {
          console.error("Error al votar:", error);
          setLoading(false);
          messageApi.error('Ya votaste por este candidato o hubo un error al votar')
        });
      };
    
  const saveChanges = () => {

    if (admin) {
      updateSurvey();
    }else{
      voteCandidate();
    }
  };

  const openAndSave = async () => {
    await fetchAPI("/encuesta/abrir/" + currentSurvey.id, {}, "POST").then(
      (res) => {
        console.log("Encuesta actualizada o creada:", res);
        fetchSurveys();
      }
    ).catch((error) => {
      console.error("Error al abrir encuesta:", error);
    });
  };
  const resetCurrentSurvey = () => {
    setCurrentSurvey(defaultCurrentSurvey);
  };

  const addSurvey = () => {
    setSurveys((prev) => [...prev, prev.length + 1]);
  };

  const removeSurvey = (index) => {
    console.log("Removing survey at index:", index);
    setSurveys((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <>
      <surveyContext.Provider
        value={{
          fetchSurveys,
          surveys,
          addSurvey,
          removeSurvey,
          currentSurvey,
          setCurrentSurvey,
          saveChanges,
          resetCurrentSurvey,
          openAndSave,
          loading
        }}
        >
        {contexHolder}
        {children}
      </surveyContext.Provider>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyContext = () => useContext(surveyContext);
