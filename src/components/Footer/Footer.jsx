import { Flex, Text } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"
import FbIcon from "../FbIcon/FbIcon.jsx"
import InstagramIcon from "../InstagramIcon/InstagramIcon.jsx"
import XIcon from "../XIcon/XIcon.jsx"


const Footer = () => {
  const ICONS = [
    {
      component: <FbIcon />,
      link: "http://facebook.es",
      id: 1,
    },
    {
      component: <InstagramIcon />,
      link: "http://instagram.es",
      id: 2,
    },
    {
      component: <XIcon />,
      link: "https://twitter.com/",
      id: 3,
    },
  ]
  return (

    <Flex
    
      padding={"54px 80px"}
      backgroundColor={"#ff4f5a"}
      color={"white"}
      alignItems={"center"}
          
      
      
    >

{ICONS.map(({ component, link, id }) => {
        return (
          <Flex justifyContent={"left"} padding={"10px"}>
          <CustomLink to={link} cursor={"pointer"} key={id}>
            {component}
          </CustomLink></Flex>
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
