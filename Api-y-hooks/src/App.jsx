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
