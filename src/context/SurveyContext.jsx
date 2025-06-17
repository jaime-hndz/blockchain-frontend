import React, { useContext, useState } from "react";

const surveyContext = React.createContext({});

export const SurveyContextProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([
    {
      id: 1,
      name: "Encuesta 1",
      candidates: [
        { id: 11231, name: "Candidato 1", votes: 0 },
        { id: 11221, name: "Candidato 2", votes: 0 },
      ],
      starts: 0,
      ends: 0,
    },
    {
      id: 2,
      name: "Encuesta 2",
      candidates: [
        { id: 11231, name: "Candidato Y", votes: 0 },
        { id: 11221, name: "Candidato X", votes: 0 },
      ],
      starts: 0,
      ends: 0,
    },
    {
      id: 3,
      name: "Encuesta 3",
      candidates: [
        { id: 11231, name: "Candidato A", votes: 0 },
        { id: 11221, name: "Candidato B", votes: 0 },
      ],
      starts: 0,
      ends: 0,
    },
  ]);

  const [currentSurvey, setCurrentSurvey] = useState({
    id: Date.now(),
    name: "",
    candidates: [
      { id: Date.now()+1, name: "", votes: 0 },
      { id: Date.now()+2, name: "", votes: 0 },
    ],
    starts: 0,
    ends: 0,
  });

  const saveChanges = () => {
    setSurveys([...surveys.map(s => {
      if (s.id === currentSurvey.id) {
        return currentSurvey;
      }
      return s;
    })])

  };

    const resetCurrentSurvey = () => {
      setCurrentSurvey({
        id: Date.now(),
        name: "",
        candidates: [
          { id: Date.now()+1, name: "", votes: 0 },
          { id: Date.now()+2, name: "", votes: 0 },
        ],
        starts: 0,
        ends: 0,
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
        surveys,
        addSurvey,
        removeSurvey,
        currentSurvey,
        setCurrentSurvey,
        saveChanges,
        resetCurrentSurvey
      }}
    >
      {children}
    </surveyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyContext = () => useContext(surveyContext);
