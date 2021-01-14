import { Box, Container, Text, Circle, Flex, Button, Grid, IconButton } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <Box shadow="lg" bg="white" width="full">
        <Container maxW="xl" centerContent p="3" justifyContent="space-between" flexDir="row">
          <Flex flexDir="row" alignItems="center">
            <Circle bg="orange.300" w="8" h="8" mr="2" />
            <Text fontSize="3xl">Batya</Text>
          </Flex>
          <Grid autoFlow="column" gap="4">
            <Button variant="ghost">Buy</Button>
            <Button variant="ghost">Rent</Button>
            <IconButton aria-label="menu" icon={<FaUser />} />
          </Grid>
        </Container>
      </Box>
    </nav>
  );
}
