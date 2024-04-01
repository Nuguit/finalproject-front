import { Box, Flex, Image } from "@chakra-ui/react";
import LoginPicture from "../../pages/LoginPage/LoginPicture.jpg";

const FormLoginLayout = ({ children }) => {
  return (
    <Flex
      minH={"auto"} 
      maxWidth={"1400px"}
      margin={"0 auto"} 
      alignItems={"center"} 
    >
      <Box w={"50%"} position={"relative"}>
        {children}
      </Box>
      <Box w={"50%"}>
        <Image src={LoginPicture} width={"100%"} height={"auto"} />
      </Box>
    </Flex>
  );
};

export default FormLoginLayout;

