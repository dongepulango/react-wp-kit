import React from 'react';
//styles
import styled from 'styled-components';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
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
          <Posts />
        </Container>
      </HomeWrap>
    </Layout>
  );
};

export default Home;