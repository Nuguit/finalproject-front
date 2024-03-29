import React from 'react'
import LoggedNavbar from "../../components/Navbar/LoggedNavBar/LoggedNavBar"
import icono from "../../components/Navbar/MainNavbar/icono.png"
import { Flex } from '@chakra-ui/react'
import { Image , Text , Box } from '@chakra-ui/react'
import CustomLink from '../../components/CustomLink/CustomLink'
import { Link  } from 'react-router-dom'
import ContributionsKittie from "./ContributionsKittie/ContributionsKittie.png"
import ContributionsComponent from '../../components/Contributions/Contributions'



export const ContributionPage = () => {
  return (
    <div>
          <Flex justifycontent={"center"} paddingTop={"100px"}>        
        <CustomLink to="/">
          <Image
            borderRadius='full'
            boxSize='200px'
            src={icono}
            alt='SafeWalk'></Image></CustomLink></Flex>
    
    <ContributionsComponent/>
<Box paddingTop={"150px"} paddingBottom={"5px"} fontSize={"50px"}  display={"flex"} justifycontent={"center"}>
    <Text>
        ¡Gracias por formar parte de la comunidad SafeWalk! Tu ayuda es imprescindible ❤
    </Text>
</Box>

<Box display={"flex"} justifycontent={"center"}><img width={"20%"} src={ContributionsKittie}></img></Box>
<Box paddingTop={"50px"} paddingBottom={"5px"} fontSize={"50px"}  display={"flex"} justifycontent={"center"}><Link to="/safemap"><Text color="#ff4f5a">¿Quieres añadir un nuevo aviso?</Text></Link></Box>
</div>
  )
}



export default ContributionPage