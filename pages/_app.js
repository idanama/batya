/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import { Box, ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Batya</title>
      </Head>
      <ChakraProvider>
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
