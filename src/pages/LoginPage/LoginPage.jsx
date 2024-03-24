import FormLoginLayout from "../../components/FormPagesLayout/FormLoginLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import LoginPageButton from "../../components/Buttons/LoginPage/LoginPage"
import { Flex , Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    
  })
  

  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await login(userData)
  }

  return (
    <Flex flexDirection="column" alignItems={"center"} >
  <FormLoginLayout >
    <CustomForm
      title={"Inicia sesión"}
      onChange={onChange}
      onSubmit={onSubmit}
      options={["email", "password"]}
    />
  </FormLoginLayout>
  
  
     
    <Link to= "/tuperfil"><LoginPageButton/></Link>

   
    
</Flex>
  )
}

export default LoginPage
