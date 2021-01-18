import { Container, Grid, Skeleton, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export default function Listing() {
  const listing = {
    property_id: 'property5',
    data_registered: 2,
    sqm: 85,
    beds: 2,
    baths: 2,
    year_built: 1956,
    cooling: true,
    heating: true,
    furnished: true,
    details: 'wow so nice apartment',
    arnona: 800,
    user_id: 235,
    parking_name: 'garage', // ['garage','off_street']
    view: 'city', // ['city','mountain','park','water']
    total_floors: null,
    apartment_floor: 4,
    lot_size: null,
    rooms: 3,
    balconies: 2,
    mamat: true,
    elevator: true,
    renovated: true,
    solar_water: true,
    wheelchair: false,
    storage: false,
    vaadbait: 200,
    type_type: 'apartment', // ['apartment','condo_single_unit','house','townhouse']
    // - rent add
    rent_add_id: 'rent_add2',
    pets: 'Allows small dog', // ['Allows large dog','Allows small dog','Allows cat','Not allowed']
    deposit: 400,
    price_month: 5300,
    date_available: '2021-02-11',
    user_user_id: 'user3',
    property_property_id: 'property5',
    // - sell add
    // sell_add_id: 'sell_add3',
    // date_added: '2021-01-02',
    // price: '2000000',
    // user_user_id: 'user3',
    // property_property_id: 'property5'
  };
  return (
    <Container maxW="3xl" pt={3} pb={3}>
      <Stack direction={['column', 'row']} spacing="2">
        <Grid minH="300px" minW="50%" templateRows={['repeat(2,1fr)', 'repeat(3,1fr)']} gap={2}>
          <Skeleton h="300px" />
          <Skeleton h="300px" />
          <Skeleton h="300px" />
          <Skeleton h="300px" />
          <Skeleton h="300px" />
        </Grid>
        <Container>
          <Stat>
            <StatNumber>{`${new Intl.NumberFormat().format(listing.price_month)} ₪`}</StatNumber>
            <StatLabel>{`${listing.type_type}, ${listing.sqm} m², ${listing.rooms} rooms.`}</StatLabel>
          </Stat>
        </Container>
      </Stack>
    </Container>
  );
}
