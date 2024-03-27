import React, {  useState } from "react"
import FormSignupLayout from "../../components/FormPagesLayout/FormSignupLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { AuthContext } from "../../contexts/AuthContext"
import { Flex, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import SignupPicture from "./SignupPicture.jpg"
import authService from "../../services/auth.service"
import { Box } from "@chakra-ui/react"


const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const toast = useToast()
  const navigate = useNavigate()

  

  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await authService.signup(userData)
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      navigate("/login")
    } catch (error) {
      console.log("Error ==>", error)
    }
  }

  return (
    <Flex display={"flex"}>

<Flex height={"50%"} width={"50%"}><img src={SignupPicture} ></img></Flex>

    <FormSignupLayout>
      
      <Box paddingLeft={"200px"}>
      <CustomForm
        
        marginBottom={"10px"}
        title={"Regístrate"}
        onChange={onChange}
        onSubmit={onSubmit}
        options={["email", "password", "username" ]}
        />
      </Box>
      

     
      


    </FormSignupLayout>
    

    
    </Flex>
  )
}

export default SignupPage
