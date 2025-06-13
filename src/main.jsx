import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './routers/AppRouter'
import { SurveyContextProvider } from './context/SurveyContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurveyContextProvider>
      <AppRouter />
    </SurveyContextProvider>
  </StrictMode>,
)
