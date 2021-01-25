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
  useDisclosure,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/client';

import ThemeSelector from './ThemeSelector';
import CustomModal from './Modal';
// import { LoginArea } from './Signin';
import { SignUpArea } from './Signup';
// import Auth from './Auth';
import Auth from '../pages/auth';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSignin, setIsSignin] = useState(true);
  function modalHandler(signInstate) {
    setIsSignin(signInstate);
    onOpen();
  }

  const [session, loading] = useSession();

  return (
    <nav style={{ zIndex: 50 }}>
      <Box shadow="lg" bg="bg" width="full">
        <Container
          maxW="6xl"
          w="full"
          centerContent
          p="3"
          justifyContent="space-between"
          flexDir="row"
        >
          <Flex flexDir="row" alignItems="center">
            {session && <span> Signed in as {session.user.email} </span>}
            <Image src="/batya-logo.png" width="60" height="60" alt="Batya logo" />
            <Text ml="2" fontSize="4xl">
              <span>Batya</span>
            </Text>
          </Flex>
          <Grid autoFlow="column" gap="4" position="relative">
            <ThemeSelector />
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
            <Menu style={{ zIndex: '50' }} placement="bottom-end">
              <MenuButton as={Button} id="mnuUser">
                <FaUser id="mnuUserIcon" />
              </MenuButton>
              <MenuList style={{ zIndex: '50' }}>
                <MenuItem>
                  <Auth session={session} />
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
        <SignUpArea />
      </CustomModal>
    </nav>
  );
}
