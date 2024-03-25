import { Flex, Text } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"
import FbIcon from "../FbIcon/FbIcon.jsx"
import InstagramIcon from "../InstagramIcon/InstagramIcon.jsx"
import XIcon from "../XIcon/XIcon.jsx"
import { Box } from "@chakra-ui/react"


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
  ]
  return (

    <Flex
    
      padding={"54px 80px"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
      alignItems={"center"}
          
      
      
    >

{ICONS.map(({ component, link, id}) => {
        return (
          <Box key={id} justifyContent={"left"} padding={"10px"}>
          <CustomLink to={link} cursor={"pointer"} key={id}>
            {component}
          </CustomLink></Box>
        )
      })}

         
      <Flex >
        <CustomLink to="/sobrenosotros">
          <Text alignItems={"flex-end"} fontSize={"24px"} fontWeight={"400"} >Sobre Nosotr@s/Contacto</Text>
        </CustomLink></Flex>


</Flex>

    
  )
}

export default Footer
