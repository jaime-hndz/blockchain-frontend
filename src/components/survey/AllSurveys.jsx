import React from 'react'
import { Survey } from './Survey'
import { NewSurvey } from './NewSurvey'
import { useSurveyContext } from '../../context/SurveyContext'

export const AllSurveys = () => {

  const { surveys} = useSurveyContext();
  
  return (
    <div>
      <div>Encuestas: </div>
      <div className='grid grid-cols-4 gap-4'>
      <NewSurvey />
      {surveys.map((survey) => (<Survey name={survey} key={survey} />))}
      </div>

    </div>
  )
}
