import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {routes} from "./Routes";
import { Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Card from "./Components/Card";
import Favs from "./Routes/Favs";
import Contact from './Routes/Contact';
import NotFound from "./Routes/NotFound"
import Detail from "./Routes/Detail";
import { useEstadosGlobales } from "./Components/utils/global.context";



function App() {

  const { state, theme} = useEstadosGlobales()
 

  return (
    <div className={state.theme}>

    
      <Navbar/>

      <Routes>
      
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.detail} element={<Detail />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.favs} element={<Favs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

      <Footer/>

     </div>
  );
}

export default App;


