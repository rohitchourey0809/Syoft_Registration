import React, { useEffect, useState } from 'react';
import { Box, Center, Grid, Stack } from '@chakra-ui/react';
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
        .get('https://syoftapi.herokuapp.com/product', {
          params: {
            category: filterTitle,
            _page: page,
            _limit: 10,
            q: query,
          },
        })
        .then(response => {
          console.log(response.data);
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
