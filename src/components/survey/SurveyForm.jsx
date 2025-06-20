import React, { useEffect } from "react";
import { BasicSurveyButton } from "./BasicSurveyButton";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useSurveyContext } from "@/context/SurveyContext";
import { admin } from "@/helpers/UserProvider";

export const SurveyForm = ({ survey }) => {
  const { setCurrentSurvey } = useSurveyContext();
  const [candidates, setCandidates] = React.useState([]);

  useEffect(() => {
    if (survey) {
      setCurrentSurvey(survey);
      setCandidates(survey.candidates);
    }
  }, [survey, setCurrentSurvey]);

  return (
    <div className="grid gap-4">
      {admin && (
        <div className="grid gap-3">
          <Label htmlFor="name-1">Nombre</Label>
          <Input
            id="name-1"
            name="name"
            defaultValue={survey.name}
            onChange={(e) => {
              setCurrentSurvey((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
            disabled={survey.created}
          />
        </div>
      )}
      {/* <h1 className="text-xl font-bold text-gray-800">Fechas</h1>
      <Separator className="" />
        <div className="grid gap-3">
          <Label htmlFor="name-1">Inicio</Label>
          <Input
            id="name-1"
            name="name"
            defaultValue={survey.starts}
            onChange={(e) => {
              setCurrentSurvey((prev) => ({
                ...prev,
                starts: e.target.value,
              }));
            }}
            disabled={survey.created}
          />
          <Label htmlFor="name-1">Fin</Label>
          <Input
            id="name-1"
            name="name"
            defaultValue={survey.ends}
            onChange={(e) => {
              setCurrentSurvey((prev) => ({
                ...prev,
                ends: e.target.value,
              }));
            }}
            disabled={survey.created}
          />
        </div> */}
      <h1 className="text-xl font-bold text-gray-800">Candidatos</h1>
      <Separator className="" />
      {candidates.map((c, index) =>
        admin ? (
          <div key={c.id} className="grid gap-3">
            <div className="flex items-center gap-2">
              <Input
                id={`candidate-${c.id + 1}`}
                placeholder={`Candidato ${index + 1}`}
                name={`candidate-${c.id + 1}`}
                defaultValue={c.name}
                onChange={(e) => {
                  setCandidates((prev) =>
                    prev.map((candidate) =>
                      candidate.id === c.id
                        ? { ...candidate, name: e.target.value }
                        : candidate
                    )
                  );
                  setCurrentSurvey((prev) => ({
                    ...prev,
                    candidates: prev.candidates.map((candidate) =>
                      candidate.id === c.id
                        ? { ...candidate, name: e.target.value }
                        : candidate
                    ),
                  }));
                }}
                disabled={survey.created}
              />
              {survey.created ? (
                <span>{c.votes}</span>
              ) : (
                candidates.length > 2 && (
                  <Button
                    onClick={() => {
                      const updatedCandidates = candidates.filter(
                        (candidate) => candidate.id !== c.id
                      );
                      setCandidates([...updatedCandidates]);
                      setCurrentSurvey((prev) => ({
                        ...prev,
                        candidates: updatedCandidates,
                      }));
                    }}
                    variant={"ghost"}
                    disabled={survey.created}
                  >
                    x
                  </Button>
                )
              )}
            </div>
          </div>
        ) : (
          <div key={c.id} className="grid gap-2">
            <Button
              className={c.selected ? 'bg-red-500 hover:bg-red-500' : 'bg-gray-400 hover:bg-gray-200'}
              id={`candidate-${c.id + 1}`}
              name={`candidate-${c.id + 1}`}
              onClick={() => {
                setCurrentSurvey((prev) => ({
                  ...prev,
                  candidates: prev.candidates.map((candidate) => {
                    return { ...candidate, selected: candidate.id === c.id }
                  }
                  ),
                }));
                setCandidates((prev) =>
                  prev.map((candidate) => ({
                    ...candidate,
                    selected: candidate.id === c.id,
                  }))
                );
              }}
            >{c.name}</Button>
          </div>
        )
      )}

      {!survey.created && admin && (
        <>
          <Button
            onClick={() => {
              const newCandidate = { id: Date.now(), name: "", votes: 0 };
              setCurrentSurvey((prev) => ({
                ...prev,
                candidates: [...prev.candidates, newCandidate],
              }));
              setCandidates((prev) => [...prev, newCandidate]);
            }}
          >
            +
          </Button>
        </>
      )}
    </div>
  );
};
