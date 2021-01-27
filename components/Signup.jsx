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
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from './Logo';

const VARIANT_COLOR = 'teal';

const SignUp = ({ logo = true }) => (
  <Flex width="full" align="center" justifyContent="center">
    <Box px={4} width="full" maxWidth="500px">
      <SignUpHeader logo={logo} />
      <SignUpForm />
    </Box>
  </Flex>
);

const SignUpHeader = ({ logo }) => (
  <>
    <Center>{logo && <Logo />}</Center>
    <VStack my={8} textAlign="left" alignItems={logo ? 'flex-start' : 'center'}>
      <Text fontSize="4xl">Sign up</Text>
      <Link href="/auth/signin">
        <a>
          <Text color={`${VARIANT_COLOR}.500`}>Already have an account?</Text>
        </a>
      </Link>
    </VStack>
  </>
);

const SignUpForm = () => {
  const router = useRouter();
  const toast = useToast();
  const formInitialState = {
    first_name: '',
    last_name: '',
    email: '',
    phone1: '',
    phone2: '',
    password: '',
    password2: '',
  };
  const [form, setForm] = useState(formInitialState);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone1, phone2, password } = form;
    const res = await (
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: {
            first_name,
            last_name,
            email,
            phone1,
            phone2,
            password,
          },
        }),
      })
    ).json();
    if (res.id) {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      router.push('/auth/signin');
    } else {
      toast({
        title: 'Account creation failed.',
        description: "We couldn't create the account.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setForm(formInitialState);
    }
  };
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl mt={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            required
            type="text"
            placeholder="Enter your First Name"
            name="first_name"
            value={form.first_name}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            required
            type="text"
            placeholder="Enter your Last Name"
            name="last_name"
            value={form.last_name}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            required
            type="email"
            placeholder="Enter your Email Address"
            name="email"
            value={form.email}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            required
            type="phone"
            placeholder="Enter your phone number"
            name="phone1"
            value={form.phone1}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Secondary Phone Number</FormLabel>
          <Input
            type="phone"
            placeholder="Enter your secondary phone number"
            name="phone2"
            value={form.phone2}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            required
            type="password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Confirm password</FormLabel>
          <Input
            required
            type="password"
            placeholder="Confirm your password"
            name="password2"
            value={form.password2}
            onChange={handleForm}
          />
        </FormControl>

        <Button
          colorScheme={VARIANT_COLOR}
          width="full"
          mt={4}
          onClick={handleSubmit}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
export default SignUp;
