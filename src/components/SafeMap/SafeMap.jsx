import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBTCcJOX5L4Bb-vtJTf8oax9q-U3UjYChk'
  });

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '800px', border: '10px solid green' }}
      center={currentLocation}
      zoom={15}
    >
      {currentLocation && (
        <Marker position={currentLocation} />
      )}
    </GoogleMap>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;