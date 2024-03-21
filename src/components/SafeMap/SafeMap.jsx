import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Marker2 from "./Marker2.png"


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });
  

  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    const mapOptions = {
    center: currentLocation,
    zoom: 15,

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
        <Marker position={currentLocation} icon={Marker2} 
           /> )}
      
    </GoogleMap>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;