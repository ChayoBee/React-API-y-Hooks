import React, { useState } from 'react';
import '../Landing/Landing-stylesheet/Buscador.css';

const Buscador = ({ setFiltro }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleOnChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    //Aquí es donde el input hace la acción de buscar en la lista de la API
  };
    
    const handleSearch = () => {
      setFiltro(inputValue.toLocaleLowerCase()); //Se ejecuta la función, convirtiendo a minúsculas antes de filtrar.
    };
    
  return (
    <>
    <h2 className='title'>Son solo 150, búsca tu favorito</h2>
      <section className='container-search'>
        <input 
        className='search'
        type="text" 
        placeholder="Busca a tu pokemon"
        name='Buscar'
        autoComplete='off'
        value={inputValue}
        onChange={handleOnChange} />

        <button onClick={handleSearch} className='btn'>
          Buscar
        </button>
      </section>
    </>
  );
}

export default Buscador;

/*-Creamos el buscador y le damos los props a value y onChange.
-Al "onChange" le damos el evento creado en "handleOnChange" para que efectúe el filtro.

-Mientras que al botón le damos la acción para que haga la búsqueda.
*/