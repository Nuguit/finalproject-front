import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Formulario() {

  const [warning, setWarning] = useState('');

  const handleWarningChange = (event) => {
    setWarning(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
          
        
        <input style={{ backgroundColor: '#e5e5e5', height: '400px', width:'1000px', marginLeft: '100px', marginBottom: '100px' }}
          type="text"
          id="warning"
          value={warning}
          onChange={handleWarningChange}
        />
      
      <Link to="/safemap/added">
  <button type="button" style={{ color: 'white', backgroundColor: '#308c67', marginLeft: '100px', padding: '10px', borderRadius: '20px', fontSize: '30px' }}>Añadir aviso</button>
</Link>
    </form>
  );
}

export default Formulario;