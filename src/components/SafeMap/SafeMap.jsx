import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";
import { Text } from '@chakra-ui/react';
import SafeMapService from "../../services/profile.service"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });
  

  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [warning, setWarning] = useState('');
  const [clickedMarker, setClickedMarker] = useState(null);
  const navigate = useNavigate();
  const {createWarning , getAllWarnings} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await SafeMapService.getAllWarnings(token) // Usa getAllWarnings del contexto de autenticación
        if (!response) {
          throw new Error("Error al obtener las coordenadas")
        }

        setMarkers(response)

        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        })
      } catch (error) {
        console.log("FETCH ERROR", error)
      }
    }

    if (isLoaded) fetchData()
  }, [getAllWarnings, isLoaded])

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    console.log("CLICKED MARKER", newMarker);
    setClickedMarker(newMarker);
  };

  const handleWarningChange = (event) => {
    const inputValue = event.target.value;

    console.log("WARNING INPUT", inputValue);
    setWarning(inputValue);
  };

  const handleSubmit = async () => {
    try {
      console.log("SUBMITTING");
      if (!clickedMarker) {
        throw new Error('Debes seleccionar una ubicación en el mapa.');
      }

      const token = localStorage.getItem("token");
      console.log("TOKEN", token);
      console.log("WARNING", warning);
      console.log("CLICKED MARKER", clickedMarker);

      const response = await SafeMapService.createWarning(token, {
        input: warning,
        markerCoordinates: [clickedMarker.lng, clickedMarker.lat]
      });
        
      console.log("RESPUESTA", response);
      if (response.status === 201) {
        navigate("http://localhost:3000/profile/safemap/added");
      }
  
      setWarning('');
      setClickedMarker(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const mapOptions = {
    center: currentLocation,
    zoom: 4,
    onClick: handleMapClick,
  
  };


  return isLoaded ? (
  <>
      <GoogleMap
        mapContainerStyle={{ width: '800px', height: '800px', border: '30px solid #308c67' }}
        {...mapOptions}
      >
        {currentLocation && (
          <Marker
            position={currentLocation}
            
          />
        )}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.location.coordinates[1], lng: marker.location.coordinates[0] }}
            icon={Marker2}
          />
        ))}
        {clickedMarker && (
          <Marker
            position={clickedMarker}
            icon={Marker2}
          />
        )}
      </GoogleMap>

      <div>
        <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"10px"} fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} textAlign={"center"}>Una vez hayas localizado el espacio en el mapa y clicado sobre él, cuéntanos:</Text>
      </div>

      <form>
        <input 
          style={{ backgroundColor: '#e5e5e5', height: '400px', width:'1000px', marginLeft: '100px', marginBottom: '100px' }}
          type="text"
          id="warning"
          value={warning}
          onChange={handleWarningChange}
        />
        <button onClick={handleSubmit} type="button" style={{ color: 'white', backgroundColor: '#308c67', marginLeft: '100px', padding: '10px', borderRadius: '20px', fontSize: '30px' }}>Añadir aviso</button>
      </form>

    </>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;

