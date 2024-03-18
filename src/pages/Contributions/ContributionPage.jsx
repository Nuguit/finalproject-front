import React from 'react'
import LoggedNavbar from "../../components/Navbar/LoggedNavBar/LoggedNavBar"
import icono from "../../components/Navbar/MainNavbar/icono.png"
import { Flex } from '@chakra-ui/react'
import { Image , Text , Box } from '@chakra-ui/react'
import CustomLink from '../../components/CustomLink/CustomLink'
import { Link  } from 'react-router-dom'
import ContributionsKittie from "./ContributionsKittie/ContributionsKittie.png"



export const ContributionPage = () => {
  return (
    <div>
      <LoggedNavbar/>
    <Flex justifyContent={"center"} paddingTop={"100px"}>        
        <CustomLink to="/">
          <Image
            borderRadius='full'
            boxSize='200px'
            src={icono}
            alt='SafeWalk'></Image></CustomLink></Flex>
    
    <Flex justifyContent={"center"} textAlign={"center"}><Text fontSize={"50px"}>Aquí están tus contribuciones:</Text></Flex>
    <Box paddingTop={"150px"} paddingBottom={"150px"} fontSize={"50px"}  display={"flex"} justifyContent={"center"}>
  
    <Text>¡Vaya! Aún no hay nada por aquí. </Text>
    <Link to="/safemap"><Text color="#ff4f5a">¿Quieres añadir tu primer aviso?</Text>
  </Link>
</Box>
<Box paddingTop={"150px"} paddingBottom={"5px"} fontSize={"50px"}  display={"flex"} justifyContent={"center"}>
    <Text>
        ¡Gracias por formar parte de la comunidad SafeWalk! Tu ayuda es imprescindible ❤
    </Text>
</Box>

<Box display={"flex"} justifyContent={"center"}><img width={"20%"} src={ContributionsKittie}></img></Box>
<Box paddingTop={"50px"} paddingBottom={"5px"} fontSize={"50px"}  display={"flex"} justifyContent={"center"}><Link to="/safemap"><Text color="#ff4f5a">¿Quieres añadir un nuevo aviso?</Text></Link></Box>
</div>
  )
}



export default ContributionPage