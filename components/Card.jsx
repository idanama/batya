import { Badge, Box, Image, Text, Stack } from '@chakra-ui/react';

export default function Card({ listing = {} }) {
  return (
    <Box rounded="20px" overflow="hidden" boxShadow="lg">
      <Image
        src="https://i.pinimg.com/originals/37/c0/84/37c084c0a98a8aba89c3483d3f19ad03.jpg"
        alt="Housing Image"
        minHeight="200px"
      />
      <Box p={3}>
        <Stack isInline align="baseline" justify="space-between">
          {listing.listing_type === 'sale' ? (
            <>
              <Text as="h1" fontWeight="semibold" fontSize="md">
                $ {listing.price}
              </Text>
            </>
          ) : (
            <Text as="h1" fontWeight="semibold" fontSize="md">
              $ {listing.price_month}
              /month
            </Text>
          )}

          <Badge variant="solid" bgColor="blue" rounded="full" px={2}>
            Est.Payment
          </Badge>
        </Stack>
        <Text fontSize="md" py={2}>
          {listing.beds} Beds | {listing.baths} Baths | {listing.sqm} m²
        </Text>
        <Text fontSize="sm">
          {listing.home_number} {listing.street}, {listing.neighbourhood}, {listing.city}
        </Text>
      </Box>
    </Box>
  );
}
