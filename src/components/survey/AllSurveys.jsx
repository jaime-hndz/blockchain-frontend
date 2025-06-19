import React, { useEffect } from 'react'
import { Survey } from './Survey'
import { NewSurvey } from './NewSurvey'
import { useSurveyContext } from '../../context/SurveyContext'
import { Button } from '../ui/button'
import { admin } from '@/helpers/UserProvider'

export const AllSurveys = () => {

  useEffect(() => {
    /* aqui va un fetch */
  }, []);

  const { surveys} = useSurveyContext();
  
  return (
    <div>
      <div>Encuestas: </div>
      <div className='grid grid-cols-4 gap-4'>
      {admin && <NewSurvey />}
      {surveys.map((survey) => (<Survey survey={survey} key={survey.id} />))}
      </div>

    </div>
  )
}
