import React, { useState } from 'react'
import { Survey } from './Survey'
import { NewSurvey } from './NewSurvey'

export const AllSurveys = () => {
  const [surveys, setSurveys] = useState([1,2,3,4,5,6,7,8,9,10]);
  return (
    <div>
      <div>Encuestas: </div>
      <div className='grid grid-cols-4 gap-4'>
      <NewSurvey setSurveys={setSurveys} />
      {surveys.map((survey) => (<Survey name={survey} index={survey} />))}
      </div>

    </div>
  )
}
