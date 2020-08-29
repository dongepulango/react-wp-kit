import React from 'react';
//context
import GlobalContext from 'components/utils/Contex';
//router
import { BrowserRouter, Switch, Route, } from "react-router-dom";
//apollo
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
//utils
import paths from 'components/utils/Paths';
//styles
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'components/styles/Reset';
import typography from 'components/styles/Typography';
//components
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import MobileNav from 'components/ui/MobileNav';
//pages
import Home from 'components/pages/Home';
import Post from 'components/pages/Post';
import About from 'components/pages/About';
import Contact from 'components/pages/Contact';
//framer-motion
import { AnimatePresence } from 'framer-motion';

//apollo client
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: paths.graphqlURL,
      credentials: 'include'
    })
  ]),
  cache: new InMemoryCache()
});

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

//styled
const SiteWrap = styled.section`
  position: relative;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalContext>
        <GlobalStyle />
        <SiteWrap>
          <BrowserRouter>
            <Header />
            <MobileNav />
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog/:slug" component={Post} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </AnimatePresence>
            <Footer />
          </BrowserRouter>
        </SiteWrap>
      </GlobalContext>
    </ApolloProvider>
  );
};

export default App;