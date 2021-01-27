import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';

import ThemeSelector from './ThemeSelector';
import CustomModal from './Modal';
import Logo from './Logo';
import SignUp from './Signup';
import SignIn from './Signin';

export default function Navbar() {
  const [modal, setModal] = useState(null);

  const handleModal = (name) => {
    setModal(name);
  };

  const [session, loading] = useSession();
  useEffect(() => {}, [session]);
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
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
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
            <Link href="/listing/add" passHref>
              <Button id="mnuAdd" variant="ghost">
                List a Home
              </Button>
            </Link>
            <Menu style={{ zIndex: '50' }} placement="bottom-end">
              <MenuButton as={Button} id="mnuUser" p="0">
                <Container p="0" w="min-content">
                  <FaUser id="mnuUserIcon" />
                </Container>
              </MenuButton>
              <MenuList style={{ zIndex: '50' }}>
                {session && (
                  <>
                    <Text px={3} py={1} opacity={0.8}>
                      {`Signed in as ${session.user.email}`}
                    </Text>
                    <MenuItem onClick={signOut}>Sign out</MenuItem>
                  </>
                )}
                {!session && (
                  <>
                    <Text px={3} py={1} opacity={0.8}>
                      Not signed in
                    </Text>
                    <MenuItem id="mnuSignup" onClick={() => handleModal('signin')}>
                      Sign In
                    </MenuItem>
                    <MenuItem id="mnuSignup" onClick={() => handleModal('signup')}>
                      Sign Up
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Grid>
        </Container>
      </Box>
      <CustomModal isOpen={modal === 'signup'} onClose={() => handleModal(null)}>
        <SignUp />
      </CustomModal>
      <CustomModal isOpen={modal === 'signin'} onClose={() => handleModal(null)}>
        <SignIn />
      </CustomModal>
    </nav>
  );
}
