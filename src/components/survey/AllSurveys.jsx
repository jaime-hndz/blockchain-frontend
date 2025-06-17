import React from 'react'
import { Survey } from './Survey'
import { NewSurvey } from './NewSurvey'
import { useSurveyContext } from '../../context/SurveyContext'
import { Button } from '../ui/button'

export const AllSurveys = () => {

  const { surveys} = useSurveyContext();
  
  return (
    <div>
      <div>Encuestas: </div>
      <div className='grid grid-cols-4 gap-4'>
      <NewSurvey />
      {surveys.map((survey) => (<Survey survey={survey} key={survey.id} />))}
      </div>

    </div>
  )
}
