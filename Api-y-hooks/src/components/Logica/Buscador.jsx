import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

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
      <Form.Control 
      type="text" 
      placeholder="Busca a tu pokemon"
      name='Buscar'
      autoComplete='off'
      value={inputValue}
      onChange={handleOnChange} />

      <button onClick={handleSearch}>
        Buscar
      </button>
    </>
  );
}

export default Buscador;

/*-Usamos bootstrap para crear el buscador y le damos los props a value y onChange.
-Al "onChange" le damos el evento creado en "handleOnChange" para que efectúe el filtro.

const handleFilterData = (dataFiltrada) => {
  setFiltro(dataFiltrada);
};//Esto se encarga de realizar el filtro.

const { value } = event.target;
const valToLowCase = value.toLowerCase(); //Hacemos destructuring del valor de los datos. Aquí hacemos que funcione el filtro cuando escribimos en el buscador.

const dataFiltrada = data.filter((pokemon) => {
return (
  pokemon.name.toLowerCase().includes(valToLowCase) ||
  pokemon.id.toString().includes(valToLowCase)
  ); 
});
*/