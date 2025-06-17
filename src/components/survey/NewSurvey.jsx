import React from "react";
import { BasicSurveyButton } from "./BasicSurveyButton";
import { SurveyForm } from "./SurveyForm";
import { useSurveyContext } from "@/context/SurveyContext";

export const NewSurvey = () => {

  const { currentSurvey } = useSurveyContext();
  return (
    <BasicSurveyButton name={"Crear encuesta"} newButton>
      <SurveyForm survey={currentSurvey} />
    </BasicSurveyButton>
  );
};
