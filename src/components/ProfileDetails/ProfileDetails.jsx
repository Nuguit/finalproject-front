import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import PenEditIcon from "../PenEditIcon/PenEditIcon"
// import EditPenIcon from "../EditPenIcon/EditPenIcon"

const ProfileDetails = ({ onOpen, profileDetails }) => {
  return (
    <Flex marginBottom={"80px"} w={"50%"} justify={"center"}>
      <Flex
        position={"relative"}
        gap={"20px"}
        minW={"550px"}
        maxHeight={"800px"}
        padding={"84px 47px"}
        border={"1px solid rgba(0,0,0,0.2)"}
        borderRadius={"20px"}
        flexDir={"column"}
      >
       {profileDetails.map(({ name, content }) => {
  return (
    <Box key={name}>
      <Text>
        <Text as={"span"} fontWeight={"bold"}>
          {name}:{" "}
        </Text>
        {typeof content === "object" ? JSON.stringify(content) : content}
      </Text>
    </Box>
  );
})}
        <PenEditIcon onClick={onOpen} />
      </Flex>
    </Flex>
  )
}

export default ProfileDetails
