import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const ProductItem = props => {
  return (
    <>
      <Grid templateColumns="repeat(2, 300px)" className="container">
        <Center py={6}>
          <GridItem
            width={'1000px'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={5}
            className="elements"
          >
            <Box h={'210px'} bg={'gray.100'}>
              {/* <Image
                src={props.imageUrl}
                height={'100%'}
                width={'100%'}
                margin={'auto'}
                p={10}
                bg={'cream'}
              /> */}
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={400}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {props.Inventry}
              </Text>
              <Heading
                // color={useColorModeValue('gray.700', 'white')}
                fontSize={'1xl'}
                fontFamily={'body'}
              >
                {props.Title}
              </Heading>
              <Text fontSize={'20px'}>{props.Description}</Text>
              <Text color={'red.500'} letterSpacing={1}>
                `${props.Price}`
              </Text>
              {/* <Text color={'black.500'}>
                <Rating rating={props.rating} />
              </Text> */}
              {props.Description}
            </Stack>
          </GridItem>
        </Center>
      </Grid>
    </>
  );
};
