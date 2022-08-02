import { Box, Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <>
      <VStack className="center" margin="400">
        <Button colorScheme="dark" color="white" fontSize="50px"> Welcome To Home Page</Button>
        <Link to="/register">
          <Button colorScheme="cyan" variant="solid">
            Click for Registration
          </Button>
        </Link>
      </VStack>
    </>
  );
};
