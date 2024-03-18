import FormLoginLayout from "../../components/FormPagesLayout/FormLoginLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import SignupPageButton from "../../components/Buttons/SignupPage/SignupPageButton"
import { Flex , Box } from "@chakra-ui/react"

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
    <Flex flexDirection="column" alignItems="left" >
  <FormLoginLayout>
    <CustomForm
      title={"Inicia sesión"}
      onChange={onChange}
      onSubmit={onSubmit}
      options={["email", "password"]}
    />
  </FormLoginLayout>
  <Flex position={"absolute"} paddingTop={"850px"} paddingLeft={"100px"}><SignupPageButton /></Flex>
</Flex>
  )
}

export default LoginPage
