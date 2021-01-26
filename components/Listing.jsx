import { useState } from 'react';
import {
  Container,
  Grid,
  Skeleton,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  GridItem,
  SimpleGrid,
  Box,
  Heading,
  Button,
  Center,
  Img,
} from '@chakra-ui/react';
import {
  FaBurn,
  FaCity,
  FaCouch,
  FaFan,
  FaMountain,
  FaParking,
  FaUmbrellaBeach,
  FaTree,
  FaLongArrowAltUp,
  FaPaintRoller,
  FaSolarPanel,
  FaWheelchair,
  FaWarehouse,
  FaBuilding,
  FaHouzz,
  FaHome,
  FaRocket,
  FaDog,
  FaCat,
  FaPaw,
  FaBan,
} from 'react-icons/fa';

export default function Listing() {
  const listing = {
    for: 'sale',
    property_id: 'property5',
    data_registered: 2,
    sqm: 85,
    beds: 2,
    baths: 2,
    year_built: 1956,
    cooling: true,
    heating: true,
    furnished: true,
    details: 'A super nice apartment, in a great neighbourhood. Many places nearby. City view.',
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
    images: [
      'https://picsum.photos/602/1000',
      'https://picsum.photos/1000/601',
      'https://picsum.photos/1000/602',
      'https://picsum.photos/1000/605',
      'https://picsum.photos/1000/606',
    ],
  };

  const [imageLoader, setImageLoader] = useState({});

  const amneties = [
    {
      title: 'AC',
      name: 'cooling',
      icon: <FaFan />,
    },
    {
      title: 'Heating',
      name: 'heating',
      icon: <FaBurn />,
    },
    {
      title: 'Furnished',
      name: 'furnished',
      icon: <FaCouch />,
    },
    {
      title: 'View',
      name: 'view',
      icon: {
        city: <FaCity />,
        mountain: <FaMountain />,
        park: <FaTree />,
        sea: <FaUmbrellaBeach />,
      },
    },
    {
      title: 'Mamad',
      name: 'mamad',
      icon: <FaRocket />,
    },

    {
      title: 'Renovated',
      name: 'renovated',
      icon: <FaPaintRoller />,
    },
    {
      title: 'Solar water',
      name: 'solar_water',
      icon: <FaSolarPanel />,
    },
    {
      title: 'Parking',
      name: 'parking_name',
      icon: <FaParking />,
    },
    {
      title: 'Elevator',
      name: 'elevator',
      icon: <FaLongArrowAltUp />,
    },
    {
      title: 'Accessible',
      name: 'wheelchair',
      icon: <FaWheelchair />,
    },
    {
      title: 'Storage',
      name: 'storage',
      icon: <FaWarehouse />,
    },
    {
      title: {
        apartment: 'Apartment',
        condo_single_unit: 'Condo Single Unit',
        house: 'House',
        townhouse: 'Townhouse',
      },
      name: 'type_type',
      icon: {
        apartment: <FaBuilding />,
        condo_single_unit: <FaBuilding />,
        house: <FaHome />,
        townhouse: <FaHouzz />,
      },
    },
    {
      title: {
        'Allows large dog': 'Allows Dogs',
        'Allows small dog': 'Allows Small Dogs',
        'Allows cat': 'Allows Cats',
        'Not allowed': 'No Pets',
        Yes: 'All Pets Allowed',
      },
      icon: {
        'Allows large dog': <FaDog />,
        'Allows small dog': <FaDog />,
        'Allows cat': <FaCat />,
        'Not allowed': <FaBan />,
        Yes: <FaPaw />,
      },
      name: 'pets',
    },
  ];

  return (
    <Container maxW="6xl" pt={3} pb={3}>
      <Grid templateColumns="3fr 2fr" gap={4}>
        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          gridAutoRows="300px"
          gridAutoFlow="row dense"
          gap={4}
        >
          {listing.images.map((url, i) => {
            let colSpan = 1;
            let rowSpan = 1;
            if (imageLoader[url] > 1 && i % 2 === 1) {
              colSpan = 2;
            }
            if (i === 0 && imageLoader[url] > 1) {
              colSpan = 3;
            }
            if (i === 0 && imageLoader[url] <= 1) {
              rowSpan = 2;
              colSpan = 2;
            }
            return (
              <GridItem colSpan={colSpan} rowSpan={rowSpan} key={url}>
                <Skeleton isLoaded={imageLoader[url]} minH="300px">
                  <Img
                    onLoad={(e) => {
                      setImageLoader((imagesLoaded) => ({
                        ...imagesLoaded,
                        [url]: e.target.naturalWidth / e.target.naturalHeight,
                      }));
                    }}
                    src={url}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                  />
                </Skeleton>
              </GridItem>
            );
          })}
        </Grid>
        <Box>
          <Text fontSize="4xl" as="h2">
            {`${new Intl.NumberFormat().format(listing.price_month)} ₪`}
          </Text>
          <Text fontSize="xl" as="h3">
            <Text textTransform="capitalize" display="inline">
              {listing.type_type}
            </Text>
            {`, ${listing.sqm} m², ${listing.rooms} rooms.`}
          </Text>
          {/* <Text>{`Available from ${listing.date_available}`}</Text> */}
          <Text mt="2" mb="2">
            {listing.details}
          </Text>
          <Stack direction="column" shadow="base" p={6}>
            <SimpleGrid spacing={4} columns={2}>
              {amneties.map(
                (item) =>
                  listing[item.name] && (
                    <Stack direction="row" alignItems="center" key={item.name} color="gray.600">
                      <Box fontSize="xl">{item.icon[listing[item.name]] || item.icon}</Box>
                      <Box>{item.title[listing[item.name]] || item.title}</Box>
                    </Stack>
                  )
              )}
            </SimpleGrid>
            <SimpleGrid pt={4} spacing={4} columns={2}>
              {amneties.map(
                (item) =>
                  listing[item.name] === false && (
                    <Stack direction="row" alignItems="center" key={item.name} color="gray.400">
                      <Box fontSize="xl">{item.icon[listing[item.name]] || item.icon}</Box>
                      <Box>
                        <Text as="s">{item.title[listing[item.name]] || item.title}</Text>
                      </Box>
                    </Stack>
                  )
              )}
            </SimpleGrid>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}
