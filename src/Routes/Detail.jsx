import React from 'react'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEstadosGlobales } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { state, theme } = useEstadosGlobales()
  const {id} = useParams()
  const [dentista, setDentista] = useState([])
  // console.log("dentista " + dentista)


  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    axios.get(url)
    .then(response => setDentista(response.data))
    
  }, [])
console.log(dentista)

  return (
    <div className={state.theme}>
      <table>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>phone</th>
    <th>website</th>
  </tr>
  <tr>
    <td>{dentista.name}</td>
    <td>{dentista.email}</td>
    <td>{dentista.phone}</td>
    <td>{dentista.website}</td>
  </tr>
</table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

    </div>
  )
}

export default Detail