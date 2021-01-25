import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const VARIANT_COLOR = 'teal';

export const SignUpArea = () => (
  <Flex width="full" align="center" justifyContent="center">
    <Box
      borderWidth={1}
      px={2}
      width="full"
      maxWidth="500px"
      borderRadius={4}
      textAlign="center"
      boxShadow="lg"
    >
      <Box p={2}>
        <SignUpHeader />
        <SignUpForm />
      </Box>
    </Box>
  </Flex>
);

const SignUpHeader = () => (
  <Box my={8} textAlign="left">
    <Heading>Sign Up to Batya</Heading>
    <Text>
      Or
      <Link color={`${VARIANT_COLOR}.500`}>Already have an account?</Link>
    </Text>
  </Box>
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
        <FormLabel>phone 1</FormLabel>
        <Input required type="phone" placeholder="Enter your phone number 1" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>phone 2</FormLabel>
        <Input type="phone" placeholder="Enter your phone number 2" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>password 1</FormLabel>
        <Input required type="password" placeholder="Enter your phone password 1" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>password 2</FormLabel>
        <Input required type="password" placeholder="Enter your phone password 2" />
      </FormControl>

      <Button variant={VARIANT_COLOR} width="full" mt={4}>
        Sign Up
      </Button>
    </form>
  </Box>
);
