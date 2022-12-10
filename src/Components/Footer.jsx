import React from 'react'
import { useEstadosGlobales } from './utils/global.context'

const Footer = () => {
  const { state, theme } = useEstadosGlobales()
  return (
    <footer className= {state.theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <img className='img-icon' src="./images/ico-facebook.png" alt='DH-logo' />
        <img className='img-icon' src="./images/ico-instagram.png" alt='DH-logo' />
        <img className='img-icon' src="./images/ico-tiktok.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
