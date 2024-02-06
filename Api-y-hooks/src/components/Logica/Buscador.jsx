import Form from 'react-bootstrap/Form';

const Buscar = ({filtro, cambio}) => {
  return (
    <>
      <Form.Control 
      type="text" 
      placeholder="Busca a tu pokemon"
      name='Buscar'
      autoComplete='false'
      value={filtro}
      onChange={cambio} />
    </>
  );
}

export default Buscar;

//Usamos bootstrap para crear el buscador y le damos los props a value y onChange.