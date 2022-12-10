import React from "react";
import { Link } from "react-router-dom";
import { useEstadosGlobales } from './utils/global.context';
import { useEffect } from "react";


const Card = ({id, username, name}) => {

const { data, state, setFav, fav } = useEstadosGlobales()
  


const addFav = () => {
  setFav([...fav,{ id, username, name}]);
  alert(`Añadido a ${name} a favoritos`)

}

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(fav))
}, [fav])

// Aqui iria la logica para agregar la Card en el localStorage



  return (
    <div className='card'>
      <Link key={id} to= {`/dentist/${id}`}>
          
          <img src= "/images/doctor.jpg" alt="imagen" />
          <h2>{name}</h2>
          <h3>{username}</h3>
       </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav()} className="favButton">Link Add fav</button>
    </div>
  );
};

export default Card;
