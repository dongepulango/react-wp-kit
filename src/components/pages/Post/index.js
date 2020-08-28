import React from 'react';
//apollo
import { gql, useQuery } from '@apollo/client';
//styles
import styled from 'styled-components';
//components
import Layout from 'components/ui/Layout';
import Loading from 'components/ui/Loading';
import ErrorLoading from 'components/ui/ErrorLoading';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';

//styled
const PostWrap = styled.section`
  position: relative;
`;

const Post = ({ match }) => {

  //slug
  const postSlug = match.params.slug;

  //graphql query
  const POST_QUERY = gql`query getPost($slug: ID!){
    post(idType: SLUG, id: $slug) {
      id
      title
    }
  }`;

  //get data
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { slug: postSlug }
  });

  //loading
  if (loading) return <Loading />;

  //error
  if (error) return <ErrorLoading />;

  return (
    <Layout>
      <PostWrap>
        <Container>
        <Heading heading1>{data.post.title}</Heading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt consequuntur reprehenderit aliquam inventore voluptas, similique maxime vero earum aliquid animi quia cupiditate expedita minima neque cum ea accusantium quas vitae!</p>
        </Container>
      </PostWrap>
    </Layout>
  );
};

export default Post;