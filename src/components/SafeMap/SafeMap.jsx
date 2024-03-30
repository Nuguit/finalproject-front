import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SafeMapService from "../../services/profile.service";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [token, setToken] = useState(null);
  const [warning, setWarning] = useState('');
  const [doubleClickMarker, setDoubleClickMarker] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SafeMapService.getAllWarnings();
        console.log("RESPONDE", response)
        if (!response) {
          throw new Error('Error al obtener las coordenadas');
        } 
        
        setMarkers(response);
        
        console.log("LOS DATOS", response)
        
  
        
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); 
  }, []);
  

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
  };

  const handleMarkerHover = (marker) => {
    setHoveredMarker(marker);
  };
  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setMarkers([...markers, {
      input: "test",
      location: {
        type: "Point",
        coordinates: [newMarker.lng, newMarker.lat],
      }, 
    },
  ]);
  };
  const handleMapDoubleClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setDoubleClickMarker(newMarker); // Establecer las coordenadas del marcador de doble clic
  };
  const handleWarningChange = (event) => {
    setWarning(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Aquí puedes realizar cualquier operación relacionada con el formulario, como enviar los datos al servidor, etc.
  };

  const mapOptions = {
    center: currentLocation,
    zoom: 15,
    onClick: handleMapClick,
    onDblClick: handleMapDoubleClick,
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '800px', border: '10px solid green' }}
        {...mapOptions}
      >
        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={Marker2}
          />
        )}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.location.coordinates[1], lng: marker.location.coordinates[0] }}
            onMouseOver={() => handleMarkerHover(marker)}
            onMouseOut={() => handleMarkerHover(null)}
            icon={Marker2}
            onClick={() => handleMarkerClick(marker)}
          >
            {activeMarker === marker && (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{marker.input}</div>
              </InfoWindow>
            )}
          </Marker>
        ))}
         {doubleClickMarker && ( // Mostrar el marcador de doble clic si existe
          <Marker
            position={doubleClickMarker}
            icon={Marker2}
          />
        )}
      </GoogleMap>

      <div>
        <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"10px"} fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} textAlign={"center"}>Una vez hayas localizado el espacio en el mapa y clicado sobre él, cuéntanos:</Text>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          style={{ backgroundColor: '#e5e5e5', height: '400px', width:'1000px', marginLeft: '100px', marginBottom: '100px' }}
          type="text"
          id="warning"
          value={warning}
          onChange={handleWarningChange}
        />
        <Link to={"/safemap/added"}>
          <button type="submit"style={{ color: 'white', backgroundColor: '#308c67', marginLeft: '100px', padding: '10px', borderRadius: '20px', fontSize: '30px' }}>Añadir aviso</button>
        </Link>
      </form>

    </>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;
