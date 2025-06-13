import React from 'react'
import { useSurveyContext } from '../../context/SurveyContext';
import { BasicSurveyButton } from './BasicSurveyButton';

export const NewSurvey = () => {

  const {addSurvey} = useSurveyContext();
  return (
    <BasicSurveyButton newButton>
      <button
        onClick={() => {addSurvey()}} >Nueva encuesta</button>
    </BasicSurveyButton>
  )
}
