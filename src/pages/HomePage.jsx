import React from 'react'
import { AllSurveys } from '../components/survey/AllSurveys'
import { user } from '../helpers/UserProvider'
import { Separator } from "@/components/ui/separator"

export const HomePage = () => {
  const { name } = JSON.parse(user)

  return (
      <div className=" mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bienvenido, {name} <span className="text-blue-500">🚀</span>
        </h1>
        <p className="text-gray-600 mb-4">Explora y gestiona tus encuestas activas.</p>

        <Separator className="my-4" />

        <div className="mt-6">
          <AllSurveys />
        </div>
      </div>
  )
}