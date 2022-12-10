import React from 'react'
import { useEstadosGlobales } from '../Components/utils/global.context'

const NotFound = () => {
  const [state, theme] = useEstadosGlobales()
  return (
    <div className={state.theme}>
      Page Not Found
    </div>
  )
}

export default NotFound