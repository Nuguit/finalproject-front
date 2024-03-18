import { Box, Flex } from "@chakra-ui/react"


const FormSignupLayout = ({  children  }) => {
  return (
      <Flex minH={"1000px"} flexDir={"column"} >
        <Box
          w={"50%"}
          
          paddingTop={"200px"}
          paddingRight={"500px"}
        >
         
        </Box>
        <Flex flexDir={"column"} >
          {children}
        </Flex>
      </Flex>
  )
}

export default FormSignupLayout