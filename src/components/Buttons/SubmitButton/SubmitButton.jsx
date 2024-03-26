import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"

const SubmitButton = () => {
  return (
    <ChakraButton
      _hover={{
        backgroundColor: "#ff4f5a",
        color: "white"
      }}
      minH={"56px"}
      width={"100%"}
      fontSize={"24px"}
      marginTop={"54px"}
      borderRadius={"20px"}
      backgroundColor={"white"}
      fontWeight={"bold"}
      color={"#ff4f5a"}
      type="submit"
    >
      ¡Comienza a cambiar el mundo!
    </ChakraButton>
  )
}

export default SubmitButton