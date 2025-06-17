import React from "react";
import { BasicSurveyButton } from "./BasicSurveyButton";
import { useSurveyContext } from "../../context/SurveyContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyForm } from "./SurveyForm";

export const Survey = ({ survey }) => {
  const { removeSurvey } = useSurveyContext();
  return (
    <BasicSurveyButton
      closeButton={() => removeSurvey(survey.id)}
      name={survey.name}
    >
      <SurveyForm survey={survey} />
    </BasicSurveyButton>
  );
};
