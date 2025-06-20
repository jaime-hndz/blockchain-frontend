import React, { useEffect } from 'react'
import { AllSurveys } from '../components/survey/AllSurveys'
import { user } from '../helpers/UserProvider'
import { Separator } from "@/components/ui/separator"
import { useSurveyContext } from '@/context/SurveyContext'

export const HomePage = () => {
  const { nombre } = JSON.parse(user)
  const { fetchSurveys } = useSurveyContext()

  useEffect(() => {
    fetchSurveys()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
      <div className=" h-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bienvenido, {nombre} <span className="text-blue-500">🚀</span>
        </h1>
        <p className="text-gray-600 mb-4">Explora y gestiona tus encuestas activas.</p>

        <Separator className="my-4" />

        <div className="mt-6">
          <AllSurveys />
        </div>
      </div>
  )
}