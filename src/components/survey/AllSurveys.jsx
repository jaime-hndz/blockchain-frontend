import React from "react";
import { Survey } from "./Survey";
import { NewSurvey } from "./NewSurvey";
import { useSurveyContext } from "../../context/SurveyContext";
import { Button } from "../ui/button";
import { admin } from "@/helpers/UserProvider";
import { Empty } from "antd";

export const AllSurveys = () => {
  const { surveys } = useSurveyContext();

  return (
    <div className="max-h-[60vh] overflow-y-auto hide-scrollbar-when-idle">
      {!admin && surveys.length === 0 && (
        <div className="w-full">
          <div className="flex items-center justify-center">
            <Empty description={"no hay encuestas ahora mismo"} />
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {admin && <NewSurvey />}

        {surveys.map((survey) => (
          <Survey survey={survey} key={survey.id} />
        ))}
      </div>
    </div>
  );
};
