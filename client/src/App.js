import React from "react"
import { Route, Router, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './pages/Home'

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


function App() {
  return (
    <Router>
    {/* // <ApolloProvider client={client}> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    {/* // </ApolloProvider> */}
    </Router>
    
  );
}

export default App;
