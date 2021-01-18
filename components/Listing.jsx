import { Container, Grid, Skeleton, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export default function Listing() {
  return (
    <Container maxW="3xl" pt={3} pb={3}>
      <Stack direction={['column', 'row']} spacing="2">
        <Grid minH="300px" minW="50%" templateColumns={['repeat(2,1fr)', 'repeat(3,1fr)']}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Grid>
        <Container>
          <Stat>
            <StatNumber>{`${new Intl.NumberFormat().format(5300)} ₪`}</StatNumber>
            <StatLabel>Apartment, 75m², 3 rooms.</StatLabel>
          </Stat>
        </Container>
      </Stack>
    </Container>
  );
}
