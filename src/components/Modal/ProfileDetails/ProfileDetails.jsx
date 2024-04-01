import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

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
              <Text fontWeight="bold">{name}: </Text>
              <Text>{content}</Text>
            </Box>
          )
        })}
        <Text onClick={onOpen} style={{ cursor: 'pointer' }}> Modifica tu perfil </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileDetails;