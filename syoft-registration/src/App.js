import React from 'react';
import { ChakraProvider, Box, VStack, theme, Stack } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './components/RegistrationPage/Registration';
import { Login } from './components/LoginPage/Login';
import { Landing } from './components/LandingPage/Landing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Box>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
