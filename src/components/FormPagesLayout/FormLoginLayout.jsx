import { Box, Flex } from "@chakra-ui/react"
import LoginPicture from "../../pages/LoginPage/LoginPicture.jpg"
import SignupPageButton from "../Buttons/SignupPage/SignupPageButton"


const FormLoginLayout = ({  children  }) => {
  return (
    <Flex minH={"100px"} maxWidth={"1400px"} display={"flex"} alignItems={"center"}>
      <Box w={"50%"} position={"relative"} >
        {children}
      </Box>
      <Box w={"50%"}>
        <img src={LoginPicture} width={"100%"} height={"auto"}  />
      </Box>
    </Flex>
  );
};

export default FormLoginLayout
