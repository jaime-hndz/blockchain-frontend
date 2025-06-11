import React from 'react'

export const NewSurvey = ({setSurveys}) => {
  return (
    <div>
      <button
        onClick={() => {
          setSurveys((prev) => [...prev, prev.length + 1]);
        }} >nueva encuesta</button>
    </div>
  )
}
