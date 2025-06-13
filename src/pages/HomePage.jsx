import React from 'react'
import { AllSurveys } from '../components/survey/AllSurveys'
import { user } from '../helpers/UserProvider'
export const HomePage = () => {
  return (
    <div>
      <div>Bienvenido, {JSON.parse(user).name} 🚀</div>
      <div>
        <AllSurveys />
      </div>
    </div>
  )
}
