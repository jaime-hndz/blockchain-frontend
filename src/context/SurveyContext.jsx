import { fetchAPI } from "@/helpers/fetch";
import React, { useContext, useEffect, useState } from "react";
const TESTING = import.meta.env.VITE_TESTING === 'true'

const surveyContext = React.createContext({});

export const SurveyContextProvider = ({ children }) => {
  
  const [surveys, setSurveys] = useState([]);

  const [currentSurvey, setCurrentSurvey] = useState({
    id: Date.now(),
    name: "",
    candidates: [
      { id: Date.now() + 1, name: "", votes: 0, selected: false },
      { id: Date.now() + 2, name: "", votes: 0 , selected: false },
    ],
    starts: 0,
    ends: 0,
    opened: false,
  });

  useEffect(() => {
   fetchSurveys();
  }, [])
  

  const fetchSurveys = async () => {
    if (!TESTING) {
      try {
        await fetchAPI('/encuestas', {}, 'GET').then(res => {
          console.log(res)
          setSurveys(res.map(s => ({
            id: s.id,
            name: s.nombre,
            candidates: s.candidatos.map(c => ({
              id: c.id,
              name: c.nombre,
              votes: c.votos || 0,
              selected: false, 
            })),
            opens: s.abre || 0,
            ends: s.cierra || 0,
            opened: true,
            created: true, 
          })));
        });
      } catch (error) {
        console.error('Error al obtener encuestas:', error);
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
  const exists = surveys.some((s) => s.id === currentSurvey.id);

  if (!TESTING) {
    try {
      if (exists) {
        await fetchAPI(`/surveys/${currentSurvey.id}`, updatedSurvey, 'PUT');
      } else {
        const newSurvey = await fetchAPI('/surveys', updatedSurvey, 'POST');
        updatedSurvey.id = newSurvey.id; 
      }
    } catch (error) {
      console.error('Error al actualizar o crear encuesta:', error);
      return;
    }
  }

  if (exists) {
    setSurveys(
      surveys.map((s) =>
        s.id === currentSurvey.id ? updatedSurvey : s
      )
    );
  } else {
    setSurveys([
      ...surveys,
      { ...updatedSurvey, created: true },
    ]);
  }
};

const saveChanges = () => {
  updateSurvey();
};

const openAndSave = () => {
  updateSurvey({ opened: true });
};
  const resetCurrentSurvey = () => {
    setCurrentSurvey({
      id: Date.now(),
      name: "",
      candidates: [
        { id: Date.now() + 1, name: "", votes: 0 },
        { id: Date.now() + 2, name: "", votes: 0 },
      ],
      starts: 0,
      ends: 0,
      opened: false,
      created: false,
    });
  };

  const addSurvey = () => {
    setSurveys((prev) => [...prev, prev.length + 1]);
  };

  const removeSurvey = (index) => {
    console.log("Removing survey at index:", index);
    setSurveys((prev) => prev.filter((_, i) => i !== index));
  };
  return (
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
      }}
    >
      {children}
    </surveyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyContext = () => useContext(surveyContext);
