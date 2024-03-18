import React from 'react'

import SafeWalkTitle from "../Title/SafeWalkTitle.png"
import { Flex, Text, Box } from '@chakra-ui/react'
import howworksimage from "./howworksimage.png"
import { Link } from 'react-router-dom'
import PageWrapper from '../PageWrapper/PageWrapper'


const HowWorks = () => {
    return (
        <PageWrapper>
        <Flex flexDir={"column"} >
            
            <Flex paddingTop={"100px"}><img src={SafeWalkTitle} width={"100%"} height={"100%"}></img></Flex>
            
           <Text width={"100%"} height={"100%"} paddingTop={"100px"} paddingBottom={"100px"}fontSize={"100px"} fontWeight={"400"} fontStyle={'italic'} textAlign={"center"}>¿Cómo funciona?</Text>
           <Box width={"100%"} height={"100%"}>
            <Text fontSize={"50px"} fontWeight={"400"} fontStyle={'italic'} textAlign={"center"} >Al darte de alta en nuestra app estarás al día de todos los avisos nuevos que l@s usuari@s suban a las zonas del SafeMap que tú elijas. Además, podrás señalar zonas no seguras, mal iluminadas o no señalizadas (como, por ejemplo, calles sin salida) de tu ciudad o el lugar donde estés. </Text></Box>

            <Text textAlign={"center"} fontSize={"50px"}>De este modo, ayudarás a que el camino de otr@s sea más <Text as="span" color="#3fa142">seguro</Text>.</Text>
            <Flex>
            <img src={howworksimage} width={"50%"} height={"50%"}></img>
             <Flex width={"100%"} height={"100%"} >
             <Text paddingTop={"300px"} paddingLeft={"120px"} fontSize={"70px"} fontWeight={"bold"} color={"#3fa142"}> <Link to= "/signup">¿Comenzamos?</Link></Text>
            </Flex></Flex>



            

        </Flex></PageWrapper>
    )
}

export default HowWorks