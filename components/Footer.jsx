import { Box, Container, Text, Flex, Button, Grid, IconButton } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <footer>
      <Box bg="white" width="full" mb="12" mt="6">
        <Container maxW="3xl" w="full" p="3" borderTop="1px" borderColor="gray.200">
          <Grid autoFlow="column" gap="3" textColor="gray.400" fontSize="sm">
            <Grid autoFlow="row" gap="1" maxW="xs">
              <Link href="/">Home</Link>
              <Link href="/">Rent</Link>
              <Link href="/">Buy</Link>
            </Grid>
          </Grid>
          <Container
            borderTop="1px"
            borderColor="gray.200"
            pt="3"
            mt="3"
            centerContent
            w="full"
            maxW="full"
          >
            Batya
            {` - ${new Date().getFullYear()} - `}
            All rights reserved
          </Container>
        </Container>
      </Box>
    </footer>
  );
}
