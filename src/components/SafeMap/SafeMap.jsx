import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";
import Formulario from './Form/SafeMapForm';
import { Text } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  const warnings = useLoaderData();
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

 

  useEffect(() => {
    getAllWarnings();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      });
    }
  }, []);

   



  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setMarkers([...markers, newMarker]);
  };
  
  const getAllWarnings = async () => {
    try {
      const response = await fetch('/api/profile/safemap');
      if (!response.ok) {
        throw new Error('Error al obtener las coordenadas');
      }
      const data = await response.json();
      setMarkers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMarkerClick = (marker) => {
    setMarkers(markers.map((m) => {
      if (m === marker) {
        return { ...m, active: true };
      } else {
        return { ...m, active: false };
      }
    }));
  };

  const mapOptions = {
    center: currentLocation,
    zoom: 15,
    onClick: handleMapClick,
  }; 

  const handleMarkerHover = (marker) => {
    setHoveredMarker(marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '800px', border: '10px solid green' }}
      {...mapOptions}
    >
      {loading ? (
        <div>Cargando ubicación...</div>
      ) : null}
      {currentLocation && (
        <>
          <Marker
            position={currentLocation}
            icon={Marker2}
            onClick={() => handleMarkerClick(null)} 
          />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onMouseOver={() => handleMarkerHover(marker)} 
              onMouseOut={() => handleMarkerHover(null)} 
              icon={Marker2}
              onClick={() => handleMarkerClick(marker)} 
            />
          ))}

       <div>
          <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"10px"}fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} textAlign={"center"}>Una vez hayas localizado el espacio en el mapa y clicado sobre él, cuéntanos:</Text>
          
        </div> <Formulario/> </>
      )}
    </GoogleMap>
    
    
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;

