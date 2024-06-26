import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Marker2 from "./Marker2.png";
import { Text, Flex, Box } from '@chakra-ui/react';
import SafeMapService from "../../services/profile.service"
import { AuthContext } from '../../contexts/AuthContext';
import { Link , useLocation , useNavigate } from 'react-router-dom';



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
  const { getAllWarnings } = useContext(AuthContext);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [geolocationEstablished, setGeolocationEstablished] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await SafeMapService.getAllWarnings(token)
        if (!response) {
          throw new Error("Error al obtener las coordenadas")
        }

        setMarkers(response)

        if (!geolocationEstablished && location.search) {
          const params = new URLSearchParams(location.search);
          const lat = parseFloat(params.get('lat'));
          const lng = parseFloat(params.get('lng'));
          if (!isNaN(lat) && !isNaN(lng)) {
            setCurrentLocation({ lat, lng });
            setGeolocationEstablished(true);
          }
        } else if (!geolocationEstablished) {
          navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setGeolocationEstablished(true);
          });
        }
      } catch (error) {
        console.error('Error al obtener las coordenadas:', error);
      }
    }

    if (isLoaded) fetchData()
  }, [getAllWarnings, isLoaded, geolocationEstablished, location.search])


  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };

    setClickedMarker(newMarker);
  };

  const handleWarningChange = (event) => {
    const inputValue = event.target.value;

    setWarning(inputValue);
  };

  const handleSubmit = async () => {
    try {
      if (!clickedMarker) {
        throw new Error('Debes seleccionar una ubicación en el mapa.');
      }

      const token = localStorage.getItem("token");

      const response = await SafeMapService.createWarning(token, {
        input: warning,
        markerCoordinates: [clickedMarker.lng, clickedMarker.lat]
      });

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
    zoom: 15,
    onClick: handleMapClick,

  };


  return isLoaded ? (
    <Flex>
      <Box flex="1" width="50%">
        <div>
          <Text
            width={"100%"}
            height={"100%"}
            paddingTop={{ base: "50px", md: "100px" }}
            paddingBottom={"10px"}
            fontSize={{ base: "40px", md: "60px" }}
            fontWeight={"400"}
            fontStyle={'bold'}
            textAlign={"center"}
          >
            Una vez hayas localizado el espacio en el mapa y clicado sobre él, cuéntanos:
          </Text>
        </div>

        <form>
          <input
            style={{
              backgroundColor: '#e5e5e5',
              height: '200px',
              width: '800px',
              marginLeft: '50px',
              display: 'block',
              margin: 'auto',
              marginBottom: '10px'
            }}
            type="text"
            id="warning"
            value={warning}
            onChange={handleWarningChange}
          />
          <Link to="/safemap/added">
            <button
              onClick={handleSubmit}
              type="button"
              style={{
                color: 'white',
                backgroundColor: '#308c67',
                marginLeft: { base: '10px', md: '100px' },
                marginRight: { base: '10px', md: '100px' },
                marginTop: '10px',
                fontSize: { base: '30px', md: '50px' },
                padding: '10px',
                borderRadius: '20px',
                display: 'block',
                margin: 'auto',
              }}
            >
              Añadir aviso
            </button>
          </Link>
        </form> </Box>

      <Box flex="1" width="50%" ml={20} marginBottom='20px' marginRight='10px'>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '800px', border: '30px solid #308c67' }}
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
              onMouseOver={() => setHoveredMarker(marker)}
              onMouseOut={() => setHoveredMarker(null)}
            />
          ))}
          {clickedMarker && (
            <Marker
              position={clickedMarker}
              icon={Marker2}
            />
          )}


          {hoveredMarker && (
            <InfoWindow
              position={{ lat: hoveredMarker.location.coordinates[1], lng: hoveredMarker.location.coordinates[0] }}
              onCloseClick={() => setHoveredMarker(null)}
            >


              <div style={{ backgroundColor: '#308c67', padding: 8 }}>
                <input
                  style={{
                    backgroundColor: '#e2bde9',
                    height: '30px',
                    width: '400px',
                    maxWidth: '350px',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    textAlign: "center"

                  }}
                  type="text"
                  id="warning"
                  value={hoveredMarker.input}
                  readOnly
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </Box>



    </Flex>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default MyMap;