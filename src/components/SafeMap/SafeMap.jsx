import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";
import Formulario from './Form/SafeMapForm';
import { Text } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import SafeMapService from "../../services/profile.service"


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MyMap() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });
const warnings = useLoaderData();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [token, setToken] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SafeMapService.getAllWarnings();
        console.log("RESPONDE", response)
        if (!response) {
          throw new Error('Error al obtener las coordenadas');
        } 
        //const data = await response.json();
        
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


  const mapOptions = {
    center: currentLocation,
    zoom: 15,
    onClick: handleMapClick,
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
        {markers.map((marker, id) => (
          <Marker
            key={id}
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
      </GoogleMap>

       <div>
              <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"10px"} fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} textAlign={"center"}>Una vez hayas localizado el espacio en el mapa y clicado sobre él, cuéntanos:</Text>

            </div>       



      <Formulario />
    </>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;

