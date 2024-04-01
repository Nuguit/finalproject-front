import { Flex } from '@chakra-ui/react'
import React from 'react'
import SafeMapTitle from "../../components/SafeMap/SafeMapTitle.png"
import { Text, Box, Center } from '@chakra-ui/react'
import TurnMainPage from '../../components/Buttons/SafeMapAddedPage/TurnMainPage'
import TurnSafeMap from '../../components/Buttons/SafeMapAddedPage/TurnSafeMap'
import SafeMapAddedPicture from "./SafeMapAddedPicture.jpg"
import { Link } from 'react-router-dom'


const SafeMapAdded = () => {
  return (
    <Flex flexDir={"column"} >
        
       <Box display={"flex"} width={"80%"}  height={"80%"} textAlign={"center"} backgroundColor={"blue"} paddingTop={"100px"} ><img src={SafeMapTitle}></img></Box>

        < Flex textAlign={"center"} justifycontent={"center"}>
        <Text paddingTop={"100px"} fontSize={"40px"}>
        ¡Gracias! <br></br>
        Tu aviso ha sido añadido al SafeMap con éxito.
        </Text> </Flex>
        
      
       <Text paddingTop={"200px"} textAlign={"center"} fontSize={"40px"}>¿Qué te apetece hacer ahora?</Text>
       <Flex display={"flex"} justifycontent={"center"}  paddingBottom={"100px"} width={"100%"}>
       <Link to= "/"><TurnMainPage /></Link>
        <Box width="100px" />
        <Link to= "/safemap"><TurnSafeMap /></Link>
       </Flex>
       <img src={SafeMapAddedPicture}></img>
      
            
         
        
        
        
        





    </Flex>
  )
}


export default SafeMapAdded