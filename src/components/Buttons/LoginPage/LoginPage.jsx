import { Center, Button as ChakraButton, Flex } from "@chakra-ui/react"
import React from "react"

const LoginPageButton = () => {
  return (
     <ChakraButton 
      _hover={{
        color: "#3fa142"
      }}
      
      minH={"56px"}
      width={"400px"}
      fontSize={"20px"}
      marginTop={"30px"}
      borderRadius={"20px"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
      type="submit"
      
    >
      ¡Empieza <br></br> a cambiar el mundo!
    </ChakraButton>
    



  )
}

export default LoginPageButton