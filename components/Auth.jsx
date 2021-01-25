import { ColorModeProvider, CSSReset, Box, IconButton, useColorMode } from '@chakra-ui/react';

const VARIANT_COLOR = 'teal';

const SignIn = (props) => {
  return (
    <ColorModeProvider
      options={{
        useSystsemColorMode: true,
      }}
    >
      <CSSReset />
      {props.children}
    </ColorModeProvider>
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

export default SignIn;
