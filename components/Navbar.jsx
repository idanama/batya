import { useState } from 'react';
import { Box, Container, Text, Flex, Button, Grid, IconButton } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Box shadow="lg" bg="white" width="full">
        <Container
          maxW="3xl"
          w="full"
          centerContent
          p="3"
          justifyContent="space-between"
          flexDir="row"
        >
          <Link href="/" passHref>
            <Flex flexDir="row" alignItems="center" cursor="pointer">
              <Image src="/birds-nest-logo.jpg" width="60" height="60" alt="Batya logo" />
              <Text ml="2" fontSize="4xl">
                <h2>Batya</h2>
              </Text>
            </Flex>
          </Link>
          <Grid autoFlow="column" gap="4" position="relative">
            <Link href="/search" passHref>
              <Button variant="ghost">Buy</Button>
            </Link>
            <Link href="/search" passHref>
              <Button variant="ghost">Rent</Button>
            </Link>
            <IconButton
              aria-label="menu"
              icon={<FaUser />}
              onClick={() => setOpen(!open)}
              onBlur={() => setTimeout(() => setOpen(false), 100)}
            />
            {open && (
              <Grid
                p="4"
                autoFlow="row"
                gap="4"
                position="absolute"
                bg="white"
                shadow="lg"
                right="0"
                rounded="lg"
                transform="translateY(4.5rem)"
                alignItems="start"
              >
                <Button variant="ghost">Login</Button>
                <Button variant="ghost">Register</Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </nav>
  );
}
