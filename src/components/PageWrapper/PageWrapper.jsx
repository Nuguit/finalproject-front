import { Box } from "@chakra-ui/react";

const PageWrapper = ({ children }) => {
  return (
    <Box 
      padding={"10px"} // Ajusta el relleno según lo necesites
      height="64vh"    // Establece la altura al 80% del alto de la ventana del navegador
      margin="0 auto"  // Centra horizontalmente el contenido
    >
      {children}
    </Box>
  );
};

export default PageWrapper;