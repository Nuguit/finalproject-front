import React from 'react';
import { Link } from 'react-router-dom';

const WarningsList = ({ warnings }) => {
  return (
    <div>
      <p style={{ fontSize: '50px', textAlign: 'center' }}>Aquí están tus contribuciones:</p>
      {warnings.length > 0 ? (
        <ol style={{ flexDirection: "column", paddingTop: '50px', paddingBottom: '50px', fontSize: '25px', display: 'flex', justifyContent: 'center' }}>
          {warnings.map((warning, index) => (
            <li key={index}>
              <p>{warning.input}</p>
              <p>Coordenadas:
                <Link
                  to={`/safemap?lat=${warning.location.coordinates[1]}&lng=${warning.location.coordinates[0]}`}
                  style={{ color: 'green', textDecoration: 'underline' }}
                >
                  {warning.location.coordinates.join('-')}
                </Link>
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No hay contribuciones.</p>
      )}
    </div>
  );
};

export default WarningsList;