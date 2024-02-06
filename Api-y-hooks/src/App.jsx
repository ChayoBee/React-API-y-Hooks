import Navbar from './components/Landing/Navbar';
import MiApi from './components/Logica/MiApi';
import Buscador from './components/Logica/Buscador';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navbar />
      <Buscador />
      <MiApi />
    </>
  );
};

export default App;
