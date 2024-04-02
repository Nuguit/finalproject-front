import FormLoginLayout from "../../components/FormPagesLayout/FormLoginLayout";
import CustomForm from "../../components/CustomForm/CustomForm";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(userData);
  };

  return (
    <FormLoginLayout>
      <CustomForm
        marginBottom={{ base: "20px", md: "10px" }}
        submitButtonLabel={"Inicia sesión"}
        title={"Inicia Sesión"}
        onChange={onChange}
        onSubmit={onSubmit}
        options={["email", "password"]}
      />
    </FormLoginLayout>
  );
};

export default LoginPage;
