import { useState } from 'react';

import Navbar from './components/Landing/Navbar';
import MiApi from './components/Logica/MiApi';
import Buscador from './components/Logica/Buscador';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filtro, setFiltro] = useState([])

  return (
    <>
      <Navbar />
      <Buscador data={filtro} setFiltro={setFiltro}/>
      <MiApi data={filtro}/>
    </>
  );
};

export default App;
 /*
 Se designan los estados a los componentes para así puedan conectarse entre sí con la data de la API*/