import { useState } from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
            <Menu placement="bottom-end">
              <MenuButton as={Button}>
                <FaUser />
              </MenuButton>
              <MenuList w="fit-content">
                <MenuItem>Login</MenuItem>
                <MenuItem>Register</MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </Container>
      </Box>
    </nav>
  );
}
