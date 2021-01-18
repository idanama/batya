import { Grid, SimpleGrid, Skeleton, Button, Flex, HStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Search() {
  return (
    <div>
      <Head>
        <title>Batya - Search</title>
      </Head>
      <HStack spacing={2} p={2} bg="white" shadow="xl">
        <Button>Filter 1</Button>
        <Button>Filter 2</Button>
        <Button>Filter 3</Button>
        <Button>Filter 4</Button>
        <Button>Filter 5</Button>
      </HStack>
      <SimpleGrid minChildWidth="250px" spacing={4} p={4}>
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
        <Skeleton height="320px" />
      </SimpleGrid>
    </div>
  );
}
