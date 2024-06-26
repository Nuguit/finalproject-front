import { Center, Button as ChakraButton} from "@chakra-ui/react"
import React from "react"

const TurnSafeMap = () => {
  return (
    <Center >
      <ChakraButton
        _hover={{
          color: "#3fa142"
        }}
        minH={"56px"}
        width={"25%"}
        fontSize={"20px"}
        marginTop={"90px"}
        textAlign={"center"}
        borderRadius={"20px"}
        backgroundColor={"#308c67"}
        color={"white"}
        type="submit"
        flexGrow={"1"}
      >
        Volver al SafeMap
      </ChakraButton></Center>



  )
}

export default TurnSafeMap