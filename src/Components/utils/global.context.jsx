import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";



export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  
  const [data, setData] = useState([])

  // Conexion a la api
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
    
  }, [])
  

  // dark mode
const handleTheme = () => state.theme == ""? dispatch({type: "DARK_MODE"}) : dispatch({type: "LIGHT_MODE"}) ;

const [state, dispatch] = useReducer(reducer, initialState)



// FAVS

const [fav, setFav] = useState([])


  return (
    <ContextGlobal.Provider value={{
        data,
        setData,
        handleTheme,
        dispatch,
        state,
        fav,
        setFav

    }}>
      {children}
    </ContextGlobal.Provider>
  );

};


export default ContextProvider;

export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}

