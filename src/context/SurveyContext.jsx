import React, { useContext, useEffect, useState } from "react";

const surveyContext = React.createContext({});

export const SurveyContextProvider = ({ children }) => {
  
  const [surveys, setSurveys] = useState([
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
    // aqui va un fetch
  }, [])
  

  const updateSurvey = (extraFields = {}) => {
    // aqui va un fetch
  const exists = surveys.some((s) => s.id === currentSurvey.id);

  if (exists) {
    setSurveys(
      surveys.map((s) =>
        s.id === currentSurvey.id ? { ...currentSurvey, ...extraFields } : s
      )
    );
  } else {
    setSurveys([
      ...surveys,
      { ...currentSurvey, created: true, ...extraFields },
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
