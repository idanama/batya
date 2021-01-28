import {
  Box,
  Container,
  FormControl,
  IconButton,
  Input,
  Text,
  Skeleton,
  Grid,
  Button,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

import MockData from '../mock/results';

export default function Home() {
  const { colorMode } = useColorMode();
  const [results, setResults] = useState(Array(24).fill(undefined));

  useEffect(() => {
    setTimeout(() => {
      setResults(MockData);
    }, 350);
  }, []);

  return (
    <div>
      <Head>
        <title>Batya - Home Page</title>
      </Head>
      <Box minH="xl" position="relative">
        <Container
          maxW="6xl"
          w="full"
          flexDir="column"
          centerContent
          position="absolute"
          zIndex="0"
          left="50%"
          transform="translateX(-50%)"
          color="white"
        >
          <Text align="center" mt="50px" fontSize="xl" mb="25px">
            <span>Your next home</span>
          </Text>
          <FormControl maxW="lg" color="black" alignSelf="center" display="flex">
            <Input type="text" bgColor="white" size="lg" />
            <IconButton aria-label="find" icon={<FaSearch />} size="lg" ml="2" />
          </FormControl>
        </Container>
        <Image
          style={{ zIndex: '-1' }}
          src={colorMode === 'light' ? '/res/tel-aviv.jpg' : '/res/shai-pal-unsplash-night.jpg'}
          layout="fill"
          objectFit="cover"
          className="filter-hero"
        />
      </Box>
      {/* <Container maxW="6xl" w="full" pt={4}>
        <Text fontSize="xl">Latest listings</Text>
        <Grid templateColumns="repeat(3,1fr)" pt={2} pb={2} gap={4} height="2xs">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Grid>
      </Container> */}
      <Container maxW="6xl" mb="12" mt="12">
        <SimpleGrid columns={4} spacing={4} p={4}>
          {results.slice(0, 4).map((item) => (
            <Skeleton isLoaded={item} maxW="300px" height="320px">
              {item && (
              <Card
                listing={item}
              />
              )}
            </Skeleton>
          ))}
        </SimpleGrid>
        {/* <Grid autoFlow="column" gap="12">
          <Button size="lg" variant="outline">
            Buy
          </Button>
          <Button size="lg" variant="outline">
            Rent
          </Button>
        </Grid> */}
      </Container>
    </div>
  );
}
