import React from 'react'

import SafeMapTitle from "../../components/SafeMap/SafeMapTitle.png"
import { Text } from '@chakra-ui/react'
import Formulario from '../../components/SafeMap/Form/SafeMapForm'
import { Box } from '@chakra-ui/react'
import MyMap from '../../components/SafeMap/SafeMap'



const SafeMapPage = () => {
  
  
    return (
    <>
      
    <img src={SafeMapTitle}></img>
    <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"100px"}fontSize={"60px"} fontWeight={"400"} fontStyle={'bold'} textAlign={"center"}>Bienvenid@ al SafeMap. Clica en la zona del mapa donde quieras introducir alguna información valiosa para hacer el camino de tod@s más seguro. </Text>


      <MyMap 
      markers= {[ 
    {lat: 40.4165000, lng: -3.7025600}]}
      
      />
     
    

         
    
        




    
    </>
  )
}
export default SafeMapPage
