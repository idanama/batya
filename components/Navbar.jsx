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
  useModal,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import CustomModal from './Modal';
import SignIn from './Signin';

export default function Navbar() {
  //create a function to show modal

  // pass show modal as prop to modal

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
          <Flex flexDir="row" alignItems="center">
            <Image src="/birds-nest-logo.jpg" width="60" height="60" alt="Batya logo" />
            <Text ml="2" fontSize="4xl">
              <h2>Batya</h2>
            </Text>
          </Flex>
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
              <MenuList>
                <MenuItem onClick={() => setModal(true)}>Login</MenuItem>
                <MenuItem>Register</MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </Container>
      </Box>
      {modal && (
        <CustomModal>
          <SignIn />
        </CustomModal>
      )}
    </nav>
  );
}
