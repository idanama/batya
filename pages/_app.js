/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
// import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Batya</title>
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
