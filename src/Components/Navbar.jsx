import React from 'react'
import { useEstadosGlobales } from './utils/global.context';
import { routes } from './../Routes';
import { Link } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, handleTheme} = useEstadosGlobales()


  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to={routes.contact} ><h3>Contact</h3></Link>
      <Link to={routes.home}><h3>Home</h3></Link>
      <Link to={routes.favs}><h3>Favs</h3></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar