import React from 'react';
//apollo
import { gql, useQuery } from '@apollo/client';
//router
import { Link } from 'react-router-dom';
//styles
import styled from 'styled-components';
import vars from 'components/styles/Vars';
//components
import Loading from 'components/ui/Loading';
import ErrorLoading from 'components/ui/ErrorLoading';
import Heading from 'components/ui/Heading';
//moment
import Moment from 'react-moment';

//styled
const PostsWrap = styled.div`
  position: relative;
`;

const PostsItem = styled.div`
  position: relative;
  margin-bottom: 60px;
  &:hover {
    h2 {
      color: ${vars.colors.blue};
    }
  }
  a {
    display: block;
    color: ${vars.colors.text};
    &:hover {
      color: ${vars.colors.text};
    }
  }
  h2 {
    margin-bottom: 5px;
  }
  .date {
    color: #999;
    margin-bottom: 15px;
  }
`;

const Posts = () => {

  //graphql query
  const POSTS_QUERY = gql`{
    posts {
      nodes {
        id
        title
        slug
        date
        content
      }
    }
  }`;

  //get data
  const { loading, error, data } = useQuery(POSTS_QUERY);

  //loading
  if (loading) return <Loading />;

  //error
  if (error) return <ErrorLoading />;

  return (
    <PostsWrap>
      {data.posts.nodes.map(({ id, title, date, slug, content }) => (
        <PostsItem key={id}>
          <Link to={`blog/${slug}`}>
            <Heading as="h2" heading2>{title}</Heading>
            <p className="date">
              <Moment format="MMMM DD, YYYY" date={date} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: content.substring(0, 400) + '...'  }}></div>
          </Link>
        </PostsItem>
      ))}
    </PostsWrap>
  );
};

export default Posts;