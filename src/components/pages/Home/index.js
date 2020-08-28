import React from 'react';
//styles
import styled from 'styled-components';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
//blog components
import Posts from 'components/blog/Posts';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrap>
        <Container>
          <Heading heading1>Posts</Heading>
          <Posts />
        </Container>
      </HomeWrap>
    </Layout>
  );
};

export default Home;