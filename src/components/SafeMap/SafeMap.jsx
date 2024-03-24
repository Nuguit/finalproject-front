import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getAllCoordinates();
    
    
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

  const getAllCoordinates = async () => {
    try {
      const response = await fetch('/api/profile/safemap');
      if (!response.ok) {
        throw new Error('Error al obtener las coordenadas');
      }
      const data = await response.json();
      setMarkers(data);
    } catch (error) {
      console.error(error);
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
              icon={Marker2}
              onClick={() => handleMarkerClick(marker)} 
            />
          ))}
          {markers.map((marker, index) => (
            <InfoWindow
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onCloseClick={() => handleMarkerClick(null)} 
              visible={marker.active}
            >
              <div>{marker.input}</div> 
            </InfoWindow>
          ))}
        </>
      )}
    </GoogleMap>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;