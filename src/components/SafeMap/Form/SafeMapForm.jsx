import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Formulario() {
  // Definimos el estado para almacenar el nombre y el correo electrónico
  const [question, setQuestion] = useState('');
  const [warning, setWarning] = useState('');

  // Manejadores de eventos para actualizar el estado cuando se cambian los campos del formulario
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleWarningChange = (event) => {
    setWarning(event.target.value);
  };

  // Manejador de evento para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Text width={"90%"} height={"100%"} paddingTop={"10px"} paddingBottom={"20px"}fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} marginLeft={"100px"}>¿Qué hace este espacio inseguro?</Text>
        <input
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      
        
        <input style={{ backgroundColor: '#e5e5e5', height: '400px', width:'1000px', marginLeft: '100px', marginBottom: '100px' }}
          type="text"
          id="warning"
          value={warning}
          onChange={handleWarningChange}
        />
      
      <Link to={"/safemap/added"}>
      <button type="submit"style={{ color: 'white', backgroundColor: '#ff4f5a', marginLeft: '100px', padding: '10px', borderRadius: '20px', fontSize: '30px' }}>Añadir aviso</button></Link>
    </form>
  );
}

export default Formulario;