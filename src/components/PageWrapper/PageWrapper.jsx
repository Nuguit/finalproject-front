import { Box } from "@chakra-ui/react";

const PageWrapper = ({ children }) => {
  return (
    <Box
      padding={"10px"}
      height="auto"
      margin="0 auto"
    >
      {children}
    </Box>
  );
};

export default PageWrapper;