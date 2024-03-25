import FormLoginLayout from "../../components/FormPagesLayout/FormLoginLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import authService from "../../services/auth.service"
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
    try {
      const { token } = await login(userData)
      console.log("Token recibido:", token); // Aquí agregamos el console.log()
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
    }
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

