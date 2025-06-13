import React, { useContext, useEffect, useState } from "react";

const surveyContext = React.createContext({});

export const SurveyContextProvider = ({
  children,
}) => {

    const [surveys, setSurveys] = useState([1,2,3,4,5,6,7,8,9,10]);

    useEffect(() => {}, []); 

    const addSurvey = () => {
        setSurveys((prev) => [...prev, prev.length + 1]);
    }

    const removeSurvey = (index) => {
        console.log("Removing survey at index:", index);
        setSurveys((prev) => prev.filter((_, i) => i !== index));
    };
  return (
    <surveyContext.Provider value={{ surveys, addSurvey, removeSurvey }}>
      {children}
    </surveyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyContext = () => useContext(surveyContext);