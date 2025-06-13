import React from 'react'
import { BasicSurveyButton } from './BasicSurveyButton';
import { Plus } from "@mynaui/icons-react";

export const NewSurvey = () => {

  return (
    <BasicSurveyButton newButton>
      <div className='text-xl font-bold  flex items-center justify-center h-full'>
      <Plus />
      </div>
    </BasicSurveyButton>
  )
}
