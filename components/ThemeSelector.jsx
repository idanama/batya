import { IconButton, useColorMode, ChakraProvider } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="outline"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeSelector;
