import { Center, Flex , Text } from '@chakra-ui/react';
import MainTitle from '../Title/MainTitle';
import MainImage from "./MainImage.jpg"
import MainPageButton from '../Buttons/MainPage/MainPageButton';
import { Link } from 'react-router-dom';
import PageWrapper from '../PageWrapper/PageWrapper';

const Centralcont = () => {
  
  return (
    <PageWrapper>
    <Flex flexDir={'column'}>
      
    <MainTitle></MainTitle>
    <Text fontSize={"120px"} paddingTop={"400px"} position={'absolute'} fontWeight={"400"} fontStyle={'italic'} paddingLeft={"40px"}>Encuentra <br></br>tu camino.</Text>
    <img src={MainImage}></img>
    <Center><Text fontSize={"20px"}  fontWeight={"400"} fontStyle={'italic'} paddingLeft={"40px"}>La primera web que te permite conocer de antemano los espacios públicos seguros tras la experiencia de otros usuari@s.</Text></Center>
      <Link to= "/signup"><MainPageButton/></Link>
      
          </Flex></PageWrapper>
    
  );
};

export default Centralcont
