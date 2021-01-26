import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import Logo from './Logo';

const VARIANT_COLOR = 'teal';

const SignUp = ({ logo = true }) => (
  <Flex width="full" align="center" justifyContent="center">
    <Box px={2} width="full" maxWidth="500px">
      <Box p={2}>
        <SignUpHeader logo={logo} />
        <SignUpForm />
      </Box>
    </Box>
  </Flex>
);

const SignUpHeader = ({ logo }) => (
  <>
    <Center>{logo && <Logo />}</Center>
    <VStack my={8} textAlign="left" alignItems={logo ? 'flex-start' : 'center'}>
      <Text fontSize="4xl">Sign up</Text>
      <Link href="/login">
        <a>
          <Text color={`${VARIANT_COLOR}.500`}>Already have an account?</Text>
        </a>
      </Link>
    </VStack>
  </>
);

const SignUpForm = () => (
  <Box my={8} textAlign="left">
    <form>
      <FormControl mt={4}>
        <FormLabel>First Name</FormLabel>
        <Input required type="name" placeholder="Enter your First Name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Last Name</FormLabel>
        <Input required type="name" placeholder="Enter your Last Name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email Address</FormLabel>
        <Input required type="email" placeholder="Enter your Email Address" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input required type="phone" placeholder="Enter your phone number" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Secondary Phone Number</FormLabel>
        <Input type="phone" placeholder="Enter your secondary phone number" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input required type="password" placeholder="Enter your password" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Confirm password</FormLabel>
        <Input required type="password" placeholder="Confirm your password" />
      </FormControl>

      <Button colorScheme={VARIANT_COLOR} width="full" mt={4}>
        Sign Up
      </Button>
    </form>
  </Box>
);
export default SignUp;
