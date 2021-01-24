import {
  ChakraProvider,
  theme,
  colorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  CheckBox,
  Button,
} from '@chakra-ui/react';

const VARIANT_COLOR = 'teal';

const SignIn = () => {
  return (
    <ChakraProvider theme={theme}>
      <colorModeProvider>
        <CSSReset />
        <LoginArea />
      </colorModeProvider>
    </ChakraProvider>
  );
};

const loginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="center" py={4}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};
const LoginHeader = () => {
  <Box my={8} textAlign="left">
    <Heading>Sign In to Batya</Heading>
    <Text>
      Or<Link color={`${VARIANT_COLOR}.500`}>Dont have Account yet?</Link>
    </Text>
  </Box>;
};

const LoginForm = () => {
  return;
  <Box my={8} textAlign="left">
    <form>
      <FormControl mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email address" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>
      <Stack isInline justifyContent="space-between" mt={4}>
        <Box>
          <Checkbox>Remember Me</Checkbox>
        </Box>
        <Box>
          <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
        </Box>
      </Stack>
      <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
        Sign In
      </Button>
    </form>
  </Box>;
};

export default SignIn;
