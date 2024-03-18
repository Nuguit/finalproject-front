import { Box, Flex } from "@chakra-ui/react"
import LoginPicture from "../../pages/LoginPage/LoginPicture.jpg"
import SignupPageButton from "../Buttons/SignupPage/SignupPageButton"


const FormLoginLayout = ({  children,  }) => {
  return (
    <Flex minH={"1000px"} maxWidth={"1400px"} display={"flex"}>
      <Box
        w={"50%"}
        
        
      ></Box>
       
      
      <Flex alignItems={"center"} paddingLeft={"100px"} w={"50%"} position={"relative"}>
        {children}
      </Flex>
      <img src={LoginPicture} width={"100%"} height={"100%"}></img>
    </Flex>
    
  )
}

export default FormLoginLayout
