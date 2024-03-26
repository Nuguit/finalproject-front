import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import Input from "../Input/Input"



const CustomForm = ({
  title,
  onChange,
  onSubmit,
  options,
  submitButtonLabel,
  ...props
}) => {

  const handleButtonClick = (e) => {
    e.preventDefault(); 
  e.target.form.submit(); 
};
  
  return (
    <Flex {...props} minW={"400px"} maxW={"400px"} flexDir={"column"}>
      <Box textAlign="center"><Text fontSize={"48px"} fontWeight={"bold"} >
        {title}
      </Text>
      
      </Box>
     
      <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
        
      {options.map((option) => (
          <input
            type={option === 'password' ? 'password' : 'text'}
            name={option}
            onChange={onChange}
            key={option}
            placeholder={option}
          />
        ))}
        <button type="submit" onClick={handleButtonClick}>{submitButtonLabel}</button>
      </form>
        
        
               
        
      
    </Flex>
  )
}



export default CustomForm
