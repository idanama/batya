import {
  Badge,
  Box,
  Image,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  IconButton,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Skeleton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Listing from './Listing';

export default function Card({ listing, saved = false, onSave }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loaded, setLoaded] = useState(false);

  return (
    <Box h="100%">
      <Box
        rounded="md"
        overflow="hidden"
        boxShadow="lg"
        onClick={onOpen}
        cursor="pointer"
        h="100%"
        position="relative"
      >
        <Box position="absolute" top="0" right="0" p={2}>
          <IconButton
            isRound
            aria-label="Save home"
            icon={saved ? <FaHeart color="teal" /> : <FaRegHeart color="teal" />}
            onClick={(e) => {
              e.stopPropagation();
              onSave();
            }}
          />
        </Box>
        <Skeleton isLoaded={loaded} h="200px" w="100%">
          <Image
            src={listing.images?.[0]}
            alt="Housing Image"
            h="200px"
            w="100%"
            objectFit="cover"
            onLoad={() => setLoaded(true)}
          />
        </Skeleton>
        <Box p={3}>
          <Stack isInline align="baseline" justify="space-between">
            <Text fontSize="lg" as="h2">
              {`${new Intl.NumberFormat().format(listing.price_month || listing.price)} ₪`}
            </Text>
            {listing.listing_type && (
              <Badge variant="solid" bgColor="blue" rounded="full" px={2}>
                {listing.listing_type}
              </Badge>
            )}
          </Stack>
          <Text as="h3">
            <Text textTransform="capitalize" display="inline">
              {listing.type_type}
            </Text>
            {`, ${listing.sqm} m², ${listing.rooms} rooms.`}
          </Text>
          <Text fontSize="sm">{`${listing.street}, ${listing.city}`}</Text>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Listing listing={listing} modal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
