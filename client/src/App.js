import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './components/Nav';
import Home from './pages/Home';
import Profile from "./pages/Profile"
import Add from './pages/AddExercise';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/add",
    element: <Add />
  },
])

function App() {
  return (
    <ApolloProvider client={client}>
        <NavBar Brand="Fitness Journal"/>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <RouterProvider router ={router} />
        </div>
      
    </ApolloProvider>
  );
}

export default App;
