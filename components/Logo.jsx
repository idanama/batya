import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';

export default function Logo({ text = 'Batya', imageSize = 60 }) {
  return (
    <Flex flexDir="row" alignItems="center">
      <Image src="/batya-logo.png" width={imageSize} height={imageSize} alt="Batya logo" />
      {text && (
        <Text ml="2" fontSize="4xl">
          <span>{text}</span>
        </Text>
      )}
    </Flex>
  );
}
