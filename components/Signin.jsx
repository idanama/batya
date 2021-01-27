import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Center,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { csrfToken, providers, signIn } from 'next-auth/client';
import { FaApple, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Logo from './Logo';

const VARIANT_COLOR = 'teal';

const SignIn = ({ logo = true, providers }) => {
  const [providerList, setProviderList] = useState();
  const getProviders = async () => {
    setProviderList(await (await fetch('/api/auth/providers')).json());
  };
  useEffect(() => {
    getProviders();
  }, []);
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box px={4} width="full" maxWidth="500px">
        <SignInHeader logo={logo} />
        <SignInForm providers={providerList} />
      </Box>
    </Flex>
  );
};

const SignInHeader = ({ logo }) => (
  <>
    <Center>{logo && <Logo />}</Center>
    <VStack my={8} textAlign="left" alignItems={logo ? 'flex-start' : 'center'}>
      <Text fontSize="4xl">Sign in</Text>
      <Link href="/auth/signup">
        <a>
          <Text color={`${VARIANT_COLOR}.500`}>Don't have any account?</Text>
        </a>
      </Link>
    </VStack>
  </>
);

const SignInForm = ({ providers }) => {
  const iconGuide = {
    apple: <FaApple />,
    facebook: <FaFacebook />,
    google: <FaGoogle />,
    github: <FaGithub />,
  };

  const [form, setForm] = useState({ username: '', password: '' });
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { username, password } = form;
    signIn('credentials', { username, password });
  };
  return (
    <Box my={8} textAlign="left">
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            name="username"
            type="email"
            placeholder="Enter your email address"
            value={form.username}
            onChange={handleForm}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleForm}
          />
        </FormControl>
        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link href="/" color={`${VARIANT_COLOR}.500`}>
              Forgot your password?
            </Link>
          </Box>
        </Stack>
        <Button colorScheme={VARIANT_COLOR} width="full" mt={4} onClick={handleSignIn}>
          Sign In
        </Button>
      </form>
      {providers &&
        Object.values(providers).map(
          (provider) =>
            provider.id !== 'credentials' && (
              <div key={provider.name}>
                <Button
                  colorScheme={VARIANT_COLOR}
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => signIn(provider.id)}
                  textAlign="left"
                >
                  <Box w="12em" display="flex" alignItems="center">
                    <Box mx={2}>{iconGuide[provider.id]}</Box>
                    {`Sign in with ${provider.name}`}
                  </Box>
                </Button>
              </div>
            )
        )}
    </Box>
  );
};

SignInForm.getInitialProps = async (context) => ({
  providers: await providers(context),
  csrfToken: await csrfToken(context),
});

export default SignIn;
