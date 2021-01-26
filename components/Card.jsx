import {
  Badge,
  Box,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function Card(props) {
  const { form } = props;
  return (
    <Box
      rounded="20px"
      overflow="hidden"
      boxShadow="lg"
    >
      <Image
        src="https://i.pinimg.com/originals/37/c0/84/37c084c0a98a8aba89c3483d3f19ad03.jpg"
        alt="Housing Image"
        minHeight="200px"
      />
      <Box
        p={3}
      >
        <Stack
          isInline
          align="baseline"
          justify="space-between"
        >
          {form.listing_type === 'sale' ? (
            <>
              <Text
                as="h1"
                fontWeight="semibold"
                fontSize="md"
              >
                $ {form.price}
              </Text>
            </>
          ) : (
            <Text
              as="h1"
              fontWeight="semibold"
              fontSize="md"
            >
              $ {form.price_month}/month
            </Text>
          )}

          <Badge
            variant="solid"
            bgColor="blue"
            rounded="full"
            px={2}
          >
            Est.Payment
          </Badge>
        </Stack>
        <Text
          fontSize="md"
          py={2}
        >
          {form.beds} Beds | {form.baths} Baths | {form.sqm} Sqft
        </Text>
        <Text
          fontSize="sm"
        >
          {form.home_number} {form.street}, {form.neighbourhood}, {form.city}
        </Text>
      </Box>
    </Box>
  );
}
