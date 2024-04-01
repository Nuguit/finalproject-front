import { Flex } from "@chakra-ui/react"
import SafeWalkTitle from "./SafeWalkTitle.png"
import React from "react"

const MainTitle = () => {
  return (
    <Flex width={'100%'} height={"100%"} marginLeft="2px" justifyContent="flex-start" alignItems="center">
      <img src={SafeWalkTitle} style={{ width: "65%", height: "auto", maxWidth: "100%" }} alt="SafeWalk Title" />
    </Flex>
  )
}

export default MainTitle

