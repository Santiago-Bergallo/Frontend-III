import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useEstadosGlobales } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, theme, fav, setFav } = useEstadosGlobales();

  const [favorito, setFavorito] = useState([]);
  useEffect(() => {
    const favorito = JSON.parse(localStorage.getItem('favs'));
    setFavorito(favorito);
  }, []);

  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div  className='card-grid'>
      {favorito.map((item)=> (
      <div key={item.id}>
      <Card id={item.id} name={item.name} username={item.username}></Card>
      </div>
      ))}
      </div>
    </>
  );
};

export default Favs;


