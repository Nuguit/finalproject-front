import { Center, Button as ChakraButton, Flex } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const LoginPageButton = () => {
  return (
    <button type="submit">
      <ChakraButton 
        _hover={{
          color: "#3fa142"
        }}
        minH={"56px"}
        width={"400px"}
        fontSize={"20px"}
        marginTop={"30px"}
        borderRadius={"20px"}
        backgroundColor={"#308c67"}
        color={"white"}
      >
        ¡Empieza <br></br> a cambiar el mundo!
      </ChakraButton>
    </button>
  );
}
export default LoginPageButton