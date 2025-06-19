import React from 'react'
import { Survey } from './Survey'
import { NewSurvey } from './NewSurvey'
import { useSurveyContext } from '../../context/SurveyContext'
import { Button } from '../ui/button'
import { admin } from '@/helpers/UserProvider'

export const AllSurveys = () => {
  const { surveys} = useSurveyContext();
  
  return (
    <div className='max-h-[60vh] overflow-y-auto hide-scrollbar-when-idle'>
      <div className='grid grid-cols-4 gap-4'>
      {admin && <NewSurvey />}
      {surveys.map((survey) => (<Survey survey={survey} key={survey.id} />))}
      </div>

    </div>
  )
}
