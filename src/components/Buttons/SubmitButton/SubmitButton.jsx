import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"

const SubmitButton = ({ label }) => {
  return (
    <ChakraButton
      _hover={{
        backgroundColor: "#308c67",
        color: "white"
      }}
      minH={"56px"}
      width={"100%"}
      fontSize={"24px"}
      marginTop={"54px"}
      borderRadius={"20px"}
      backgroundColor={"white"}
      fontWeight={"bold"}
      color={"#308c67"}
      type="submit"
    >
      {label}
    </ChakraButton>
  )
}

export default SubmitButton
