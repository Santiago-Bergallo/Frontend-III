import React from 'react'
import Card from '../Components/Card'
import { useEstadosGlobales } from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data, theme, setTheme, handleTheme, state} = useEstadosGlobales()
  // console.log(data);

  return (
    
    <main className={state.theme} >
      
      <h1>Home</h1>

      <div className='card-grid'>
      {data.map(item=> <Card key={item.id} id={item.id} name={item.name} username={item.username} />)}
        {/* Aqui deberias renderizar las cards */}
        
      </div>
    </main>
  )
}

export default Home