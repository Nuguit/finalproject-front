import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import Input from "../Input/Input"
import { capitalizeText } from "../../utils"

const CustomForm = ({
  title,
  onChange,
  onSubmit,
  options,
  ...props
}) => {
  return (
    <Flex {...props} minW={"400px"} maxW={"400px"} flexDir={"column"}>
      <Box textAlign="center"><Text fontSize={"48px"} fontWeight={"bold"} >
        {title}
      </Text>
      
      </Box>
     
      <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
        <Flex flexDir={"column"} gap={"30px"}>
          {options.map((option) => {
            return (
              <Input
                type={option === "password" ? "password" : "text"}
                name={option}
                onChange={onChange}
                key={option}
                placeholder={capitalizeText(option)} 
              />
            )
          })}
        </Flex>
        
      </form>
    </Flex>
  )
}

export default CustomForm
