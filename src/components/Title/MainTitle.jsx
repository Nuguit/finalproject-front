import { Flex } from "@chakra-ui/react"
import SafeWalkTitle from "./SafeWalkTitle.png"
import React from "react"

const MainTitle = () => {
  return (
    <Flex width={'100%'} height={"100%"}  paddingTop={"50px"}>
      <img src={SafeWalkTitle} width={"100%"} height={"100%"}></img></Flex>
  )
}

export default MainTitle
