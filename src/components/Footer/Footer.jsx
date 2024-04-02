import { Flex, Text, Box } from "@chakra-ui/react";
import CustomLink from "../CustomLink/CustomLink";
import FbIcon from "../FbIcon/FbIcon.jsx";
import InstagramIcon from "../InstagramIcon/InstagramIcon.jsx";
import XIcon from "../XIcon/XIcon.jsx";

const Footer = () => {
  const ICONS = [
    {
      component: <FbIcon />,
      link: "http://facebook.es",
      id: "fb",
    },
    {
      component: <InstagramIcon />,
      link: "http://instagram.es",
      id: "ig",
    },
    {
      component: <XIcon />,
      link: "https://twitter.com/",
      id: "xi",
    },
  ];

  return (
    <Flex
      padding={"54px 10px"}
      backgroundColor={"#308c67"}
      color={"white"}
      alignItems={"center"}
      justifyContent={"space-between"} // Alinear elementos a la derecha y a la izquierda
      flexWrap={"wrap"} // Permitir que los elementos se envuelvan en caso de pantalla pequeña
    >
      <Flex alignItems="center">
        {ICONS.map(({ component, link, id }) => (
          <Box key={id} justifycontent={"left"} padding={"10px"}>
            <CustomLink to={link} cursor={"pointer"} key={id}>
              {component}
            </CustomLink>
          </Box>
        ))}
      </Flex>

      <Flex alignItems="center">
        <CustomLink to="/sobrenosotros">
          <Text
          marginRight={"20px"}
            alignItems={"flex-end"}
            fontSize={"24px"}
            fontWeight={"400"}
            textAlign={{ base: "center", md: "right" }} 
          >
            Sobre Nosotr@s/Contacto
          </Text>
        </CustomLink>
      </Flex>
    </Flex>
  );
};

export default Footer;

