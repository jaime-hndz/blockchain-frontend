import React from 'react'
import { Outlet } from 'react-router-dom'

export const BasicSurveyButton = ({children, closeButton, newButton = false}) => {

  const basicStyle = 'h-30 bg-green-400 relative p-4 rounded-lg hover:bg-green-500 transition-all duration-300 cursor-pointer';
  const basicStyleNew = 'bg-blue-400 relative border-2  border-blue-800 border-dashed p-4 rounded-lg hover:bg-blue-500 transition-all duration-300 cursor-pointer';
  return (
    <div className={newButton ? basicStyleNew : basicStyle}>
      {!newButton ? <div onClick={closeButton} className=' absolute top-0 right-3'>x</div> : null}
      {children}
    </div>
  )
}
