/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import {
  Box, ChakraProvider, extendTheme, useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  };
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>Batya</Head>
      <ChakraProvider theme={extendTheme({ config })} colorMode={colorMode}>
        <Navbar />
        <Box minHeight="80vh">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
