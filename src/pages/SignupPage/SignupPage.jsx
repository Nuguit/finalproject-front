import React, { useState } from "react"
import FormSignupLayout from "../../components/FormPagesLayout/FormSignupLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { Flex, useToast, Box, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import SignupPicture from "./SignUpPicture.png"
import authService from "../../services/auth.service"



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
        title: "Enhorabuena!",
        description: "Ya tienes una cuenta en SafeWalk :)",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      navigate("/login")
    } catch (error) {
    }
  }

  return (
    <Flex flexDir={{ base: "column", md: "row" }}>

      <Flex height={{ base: "50%", md: "100%" }} width={{ base: "100%", md: "50%" }}>
        <Image src={SignupPicture} objectFit="cover" />
      </Flex>

      <FormSignupLayout>
        <Box paddingLeft={{ base: "0", md: "200px" }} paddingTop={{ base: "50px", md: "0" }}>
          <CustomForm
            marginBottom={"10px"}
            submitButtonLabel={"Comienza a cambiar el mundo"}
            title={"Regístrate"}
            onChange={onChange}
            onSubmit={onSubmit}
            options={["email", "password", "username"]}
          />
        </Box>
      </FormSignupLayout>

    </Flex>
  );
};

export default SignupPage;