import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Flex } from '@chakra-ui/layout';
import Centralcont from '../../components/MainPageContent/MainPageContent';




function HomePage() {
  return (
    <PageWrapper>
      <Flex>
        <Centralcont />
      </Flex>
    </PageWrapper>
  );
}

export default HomePage;
