import React from "react";
import { Flex } from "@chakra-ui/react";

const ProfileDetails = ({ onOpen, showModal }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        position="relative"
        paddingTop="30px"
        width={{ base: "100%", md: "300px" }}
        justifyContent="center"
      >
        {!showModal && (
          <button
            onClick={onOpen}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
            }}
          >
            Modifica tu perfil
          </button>
        )}
      </Flex>
    </Flex>
  );
};

export default ProfileDetails;

