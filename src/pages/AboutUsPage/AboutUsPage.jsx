import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import SafeWalkTitle from "../../components/Title/SafeWalkTitle.png"
import AboutUsImage from "./AboutUsImage.jpg"




function AboutUs() {
  return (
    <>
      <Flex flexDir={"column"} >
        <Flex justifyContent="center"><img src={SafeWalkTitle} height={"60%"} width={"60%"} ></img></Flex>
        <Text fontStyle={"italic"} textAlign={"center"} fontSize={"60px"}>¿Quiénes somos?</Text>
        <Text color="#3fa142" paddingTop={"100px"} fontStyle={"italic"} textAlign={"center"} fontSize={"40px"}>"El valor de una idea radica en el uso de la misma"</Text>
        <Text paddingTop={"60px"} fontStyle={"italic"} paddingRight={"300px"} textAlign={"right"} fontSize={"20px"}>Thomas Edison</Text>
        <Text textAlign={"center"} fontSize={"40px"} paddingTop={"150px"}>Cuando viajamos, una de las cosas que más pueden preocuparnos a la hora de recorrer una ciudad desconocida son los espacios que deberíamos evitar: sea por ser una zona conflictiva, por no estar adaptada para según qué necesidades...
          Incluso saber qué zonas deberíamos evitar a determinadas horas: falta de iluminación, calles sin salida, etc.
          De esta necesidad surge <Text as="span" color="#3fa142">SafeWalk</Text>: una herramienta que hacemos entre tod@s y que se ha convertido en un imprescindible cuando estamos fuera de nuestro hogar.
          Nuestro valor como sociedad se basa en la colaboración y apoyo, cimientos de <Text as="span" color="#3fa142">SafeWalk</Text>.</Text>



        <Flex><img src={AboutUsImage} ></img></Flex>
      </Flex>

      <Text paddingTop={"10px"} fontSize={"30px"} fontWeight={"bold"} textAlign={"center"}>¿Quieres contarnos algo? Escríbenos a <a href="mailto:safewalk@safewalk.com?Subject=Hola">safewalk@safewalk.com</a>.</Text>


    </>

  );
}

export default AboutUs;