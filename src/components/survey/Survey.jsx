import React from 'react'
import { BasicSurveyButton } from './BasicSurveyButton'
import { useSurveyContext } from '../../context/SurveyContext';

export const Survey = ({name}) => {
  const { removeSurvey } = useSurveyContext();
  return (
    <BasicSurveyButton closeButton={() => removeSurvey(name - 1)}>
      <div>Survery {name}</div>
    </BasicSurveyButton>
  )
}
