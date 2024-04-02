import React from 'react';
import { Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import UploaderImage from '../Navbar/LoggedNavBar/imageUploader';
import { Text } from '@chakra-ui/react';

const ModalEdi = ({ children, isOpen, onClose, handleChange }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={"900px"} borderRadius={"50px"} padding={"100px"}>
        <ModalCloseButton top={"25px"} right={"25px"} size={"lg"} />
        <ModalBody style={{ display: "flex" }} padding={0}>
          <div style={{ display: 'flex', flex: 1 }}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>
                <UploaderImage onChange={(imageUrl) => handleChange({ target: { name: 'avatar', value: imageUrl } })} />
                <Text mt="4" fontSize="16px" color="gray.500">
                  Modifica tu avatar
                </Text>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default ModalEdi;
