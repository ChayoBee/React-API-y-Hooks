import { Logo } from './Landing-stylesheet/Icons';
import './Landing-stylesheet/Navbar.css'

function BasicExample() {
  return (
    <>
      <nav>
        <Logo />
        <div>
          <h2>Bienvenido a la primera Pokedex</h2>
        </div>
      </nav>
    </>
  );
}

export default BasicExample;
//Simplemente se insertó el logo y el título.
//El logo fue traído como componente, porque fue importado como svg.