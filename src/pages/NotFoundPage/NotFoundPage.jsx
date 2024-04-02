import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import NotFoundImage from "./NotFoundImage.png"

const NotFoundPage = () => {
  return (
    <Flex
      height={"calc(100vh - 275px)"}
      flexDir={"column"}
      paddingTop={"150px"}
      gap={"12px"}
      justifycontent={"center"}
      alignItems={"center"}
    >
      <Text fontWeight={"bold"} fontSize={"52px"}>
        Ups, parece que la página que buscas no existe :(
      </Text>
      <img src={NotFoundImage} width={"30%"} height={"30%"} paddingTop={"100px"}></img>
    </Flex>
  )
}

export default NotFoundPage
