import { Center, Button as ChakraButton, Flex } from "@chakra-ui/react"
import React from "react"

const MainPageButton1 = () => {
  return (
    <Center >
    <ChakraButton 
      _hover={{
        color: "#3fa142"
      }}
      minH={"56px"}
      width={"500px"}
      fontSize={"20px"}
      marginTop={"90px"}
      textAlign={"center"}
      borderRadius={"20px"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
      type="submit"
    >
      ¡Empieza <br></br> a cambiar el mundo!
    </ChakraButton></Center>



  )
}

export default MainPageButton1
