import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ProductItem } from './ProductItem';
import axios from 'axios';

export const Product = () => {
  const [Shoping, setshopData] = useState([]);
  const [filterTitle, setfilterTitle] = useState();
  const [page, setpage] = useState(1);
  const [query, setquery] = useState('');

  useEffect(() => {
    async function AllshoppingData() {
      await axios
        .get('http://localhost:8080/product', {
          params: {
            category: filterTitle,
            _page: page,
            _limit: 10,
            q: query,
          },
        })
        .then(response => {
          setshopData(response.data);
          // return response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    AllshoppingData();
  }, [filterTitle, page, query]);
  return (
    <>
      <Stack>
        <Center>
          <Box margin="auto">
            <Grid templateColumns="repeat(2, 1fr)">
              {Shoping.length &&
                Shoping.map(e => {
                  return (
                    <ProductItem
                      key={e.id}
                      id={e.id}
                      Title={e.Title}
                      Inventry={e.Inventry}
                      Description={e.Description}
                      Price={e.Price}
                    />
                  );
                })}
            </Grid>

            <Center> {/* <Checkout /> */}</Center>
          </Box>
        </Center>
      </Stack>
    </>
  );
};
