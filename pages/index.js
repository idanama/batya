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
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Batya - Home Page</title>
      </Head>
      <Box
        minH="xl"
        position="relative"
      >
        <Container
          maxW="3xl"
          w="full"
          flexDir="column"
          centerContent
          zIndex="10"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          color="white"
        >
          <Text
            align="center"
            mt="50px"
            fontSize="xl"
            mb="25px"
          >
            <h1>Your next home</h1>
          </Text>
          <FormControl maxW="lg" color="black" alignSelf="center" display="flex">
            <Input type="text" bgColor="white" size="lg" />
            <IconButton aria-label="find" icon={<FaSearch />} size="lg" ml="2" />
          </FormControl>
        </Container>
        <Image src="/res/DJI_0628+edited.jpg" layout="fill" objectFit="cover" className="filter-hero" />
      </Box>
      <Container
        maxW="3xl"
        w="full"
        pt={4}
      >
        <Text fontSize="xl">
          Latest listings
        </Text>
        <Grid templateColumns="repeat(3,1fr)" pt={2} pb={2} gap={4} height="2xs">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Grid>
      </Container>
      <Container
        maxW="3xl"
        w="full"
        pt={4}
      >
        <Text fontSize="xl">
          Recently viewed homes
        </Text>
        <Grid templateColumns="2fr 1fr 1fr" pt={2} pb={2} gap={4} height="2xs">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Grid>
      </Container>
      <Container maxW="xl" mb="12" mt="12">
        <Grid autoFlow="column" gap="12">
          <Button size="lg" variant="outline">Buy</Button>
          <Button size="lg" variant="outline">Rent</Button>
        </Grid>
      </Container>

    </div>
  );
}
