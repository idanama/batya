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
  useDisclosure,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import CustomModal from './Modal';
import { LoginArea } from './Signin';
import { SignUpArea } from './Signup';
import Auth from './Auth';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignin, setIsSignin] = useState(true);
  function modalHandler(signInstate) {
    setIsSignin(signInstate);
    onOpen();
  }
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
              <span>Batya</span>
            </Text>
          </Flex>
          <Grid autoFlow="column" gap="4" position="relative">
            <Link href="/search" passHref>
              <Button id="mnuBuy" variant="ghost">
                Buy
              </Button>
            </Link>
            <Link href="/search" passHref>
              <Button id="mnuRent" variant="ghost">
                Rent
              </Button>
            </Link>
            <Menu placement="bottom-end">
              <MenuButton as={Button} id="mnuUser">
                <FaUser id="mnuUserIcon" />
              </MenuButton>
              <MenuList>
                <MenuItem id="mnuLogin" onClick={() => modalHandler(true)}>
                  Login
                </MenuItem>
                <MenuItem id="mnuSignup" onClick={() => modalHandler(false)}>
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </Container>
      </Box>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        {isSignin ? (
          <Auth>
            <LoginArea />{' '}
          </Auth>
        ) : (
          <Auth>
            <SignUpArea />
          </Auth>
        )}
      </CustomModal>
    </nav>
  );
}
