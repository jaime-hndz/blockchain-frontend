import React, { useState } from "react";
import { BasicSurveyButton } from "./BasicSurveyButton";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export const NewSurvey = () => {
  const [canditates, setCanditates] = useState(["", ""]);

  const handleSave = () => {
    alert("Encuesta creada con éxito!");
  }

  return (
    <BasicSurveyButton name={"Crear encuesta"} newButton onSave={handleSave}>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Nombre</Label>
          <Input id="name-1" name="name" />
        </div>
        <h1 className="text-xl font-bold text-gray-800">Candidatos</h1>
        <Separator className="" />
        {canditates.map((_, index) => (
          <div key={index} className="grid gap-3">
            <div className="flex items-center gap-2">
              <Input
                id={`candidate-${index + 1}`}
                placeholder={`Candidato ${index + 1}`}
                name={`candidate-${index + 1}`}
              />
              {canditates.length >2 && (              <Button onClick={() => {setCanditates(prev => {
                const newCandidates = [...prev];
                newCandidates.splice(index, 1);
                return newCandidates;
              })}} variant={'ghost'}>x</Button>)}

            </div>
          </div>
        ))}
        <Button
          onClick={() => {
            setCanditates((prev) => [...prev, ""]);
          }}
        >
          +
        </Button>
      </div>
    </BasicSurveyButton>
  );
};
