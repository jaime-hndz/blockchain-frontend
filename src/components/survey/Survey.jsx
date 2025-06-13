import React from "react";
import { BasicSurveyButton } from "./BasicSurveyButton";
import { useSurveyContext } from "../../context/SurveyContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Survey = ({ name }) => {
  const { removeSurvey } = useSurveyContext();
  return (
    <BasicSurveyButton
      closeButton={() => removeSurvey(name - 1)}
      name={`Encuesta ${name}`}
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Username</Label>
          <Input id="username-1" name="username" defaultValue="@peduarte" />
        </div>
      </div>
    </BasicSurveyButton>
  );
};
