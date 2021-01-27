import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Input,
  Checkbox,
  Stack,
  InputLeftElement,
  InputGroup,
  Textarea,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';

export default function ListAHome() {
  const [form, setForm] = useState({
    listing_type: '', // Back End
    sqm: '',
    beds: '',
    baths: '',
    year_built: '',
    cooling: false,
    heating: false,
    furnished: false,
    details: '',
    arnona: '',
    deposit: '',
    mamad: false, // Back End
    parking_name: '',
    view: '',
    total_floors: '',
    apartment_floor: '',
    lot_size: '',
    rooms: '',
    balconies: '',
    shelter: false,
    elevator: false,
    renovated: false,
    solar_water: false,
    wheelchair: false,
    storage: false,
    vaadbait: '',
    price: '',
    price_month: '',
    pets: '',
    date_available: '',
    type_type: '',
    rooms_busy: '',
    city: '',
    neighbourhood: '',
    street: '',
    home_number: '',
    appartment_number: '',
    entrance: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <Head>
        <title>Batya - List A Home</title>
      </Head>
      <Container maxW="6xl" pt={3} pb={3}>
        <Text ml="9" mb="9" mt="9" fontSize="3xl">
          <h2>List a home</h2>
        </Text>

        <form type="submit">
          <Accordion allowToggle ml="9" mr="9" shadow="xl">
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Type
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl as="fieldset">
                  <FormLabel />
                  <RadioGroup value={form.listing_type}>
                    <HStack spacing="24px">
                      <Radio onChange={handleChange} name="listing_type" value="rental">
                        Rental
                      </Radio>
                      <Radio onChange={handleChange} name="listing_type" value="sale">
                        Sale
                      </Radio>
                      <Radio onChange={handleChange} name="listing_type" value="roommates">
                        Roommates
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Address
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <InputGroup>
                    <Stack align="baseline">
                      <Text fontSize="md" mr="2">
                        City
                      </Text>
                      <Input
                        type="text"
                        maxW="20rem"
                        maxH="3rem"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Neighbourhood
                      </Text>
                      <Input
                        type="text"
                        maxW="20rem"
                        maxH="3rem"
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Street
                      </Text>
                      <Input
                        type="text"
                        minW="40rem"
                        maxH="3rem"
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Home Number
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="home_number"
                        value={form.home_number}
                        onChange={handleChange}
                      />
                      {form.type_type === 'appartment' ? (
                        <>
                          <FormLabel />
                          <Text fontSize="md" mr="2">
                            Apartment Number
                          </Text>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            mb="4"
                            name="appartment_number"
                            value={form.appartment_number}
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <span />
                      )}
                      <Text fontSize="md">Entrance</Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="entrance"
                        value={form.entrance}
                        onChange={handleChange}
                      />
                    </Stack>
                  </InputGroup>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Housing
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <InputGroup>
                    <Stack align="baseline">
                      <Text fontSize="md" mb="1">
                        Housing Type
                      </Text>
                      <RadioGroup value={form.type_type}>
                        <HStack spacing="24px">
                          <Radio onChange={handleChange} name="type_type" value="house">
                            House
                          </Radio>
                          <Radio onChange={handleChange} name="type_type" value="appartment">
                            Apartment
                          </Radio>
                          <Radio onChange={handleChange} name="type_type" value="roommates">
                            Single Condo Unit
                          </Radio>
                        </HStack>
                      </RadioGroup>
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Size
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="sqm"
                        value={form.sqm}
                        onChange={handleChange}
                      />
                      {form.type_type === 'house' ? (
                        <>
                          <FormLabel />
                          <Text fontSize="md" mr="2">
                            Lot Size
                          </Text>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="lot_size"
                            value={form.lot_size}
                            onChange={handleChange}
                          />
                          <FormLabel />
                        </>
                      ) : (
                        <span />
                      )}
                      <Text fontSize="md" mr="2">
                        Rooms
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="rooms"
                        value={form.rooms}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Beds
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="beds"
                        value={form.beds}
                        onChange={handleChange}
                      />
                      {form.listing_type === 'roommates' ? (
                        <>
                          <FormLabel />
                          <Text fontSize="md" mr="2">
                            Beds Busy
                          </Text>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="rooms_busy"
                            value={form.rooms_busy}
                            onChange={handleChange}
                          />
                          <FormLabel />
                        </>
                      ) : (
                        <FormLabel />
                      )}
                      <Text fontSize="md" mr="2">
                        Baths
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="baths"
                        value={form.baths}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Total Floors
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="total_floors"
                        value={form.total_floors}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      {form.type_type === 'appartment' ? (
                        <>
                          <Text fontSize="md" mr="2">
                            Apartment Floor
                          </Text>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="apartment_floor"
                            value={form.apartment_floor}
                            onChange={handleChange}
                          />
                          <FormLabel />
                        </>
                      ) : (
                        ''
                      )}
                      <Text fontSize="md" mr="2">
                        Balconies
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="balconies"
                        value={form.balconies}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Year Built
                      </Text>
                      <Input
                        type="text"
                        maxW="5rem"
                        maxH="3rem"
                        name="year_built"
                        value={form.year_built}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Checkbox
                        colorScheme="green"
                        ml="2"
                        name="renovated"
                        isChecked={form.renovated}
                        onChange={handleCheck}
                      >
                        Renovated
                      </Checkbox>
                      {form.listing_type === 'sale' ? (
                        <FormLabel />
                      ) : (
                        <>
                          <FormLabel />
                          <RadioGroup value={form.pets}>
                            <HStack spacing="20px">
                              <Text fontSize="md">Pets</Text>
                              <Radio onChange={handleChange} name="pets" value="allows_large_dog">
                                Allows Dogs
                              </Radio>
                              <Radio onChange={handleChange} name="pets" value="allows_small-dog">
                                Allows Small Dogs
                              </Radio>
                              <Radio onChange={handleChange} name="pets" value="allows-cat">
                                Allows Pet
                              </Radio>
                              <Radio onChange={handleChange} name="pets" value="not_allowed">
                                No Pets
                              </Radio>
                              <Radio onChange={handleChange} name="pets" value="allowed">
                                All Pets Allowed
                              </Radio>
                            </HStack>
                          </RadioGroup>
                          <FormLabel />
                        </>
                      )}
                      <Text fontSize="md" mr="2">
                        View
                      </Text>
                      <Input
                        type="text"
                        maxH="3rem"
                        name="view"
                        value={form.view}
                        onChange={handleChange}
                      />
                      <FormLabel />
                      <Text fontSize="md" mr="2">
                        Other Details
                      </Text>
                      <Textarea
                        type="text"
                        name="details"
                        minW="40rem"
                        value={form.details}
                        onChange={handleChange}
                      />
                    </Stack>
                  </InputGroup>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Facilities
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <Stack align="baseline">
                    <RadioGroup value={form.parking_name}>
                      <HStack spacing="20px">
                        <Text fontSize="md">Parking</Text>
                        <Radio onChange={handleChange} name="parking_name" value="garage">
                          Garage
                        </Radio>
                        <Radio onChange={handleChange} name="parking_name" value="off_street">
                          Off Street
                        </Radio>
                        <Radio onChange={handleChange} name="parking_name" value="null">
                          No Parking
                        </Radio>
                      </HStack>
                    </RadioGroup>
                    <Checkbox
                      colorScheme="green"
                      ml="2"
                      name="elevator"
                      isChecked={form.elevator}
                      onChange={handleCheck}
                    >
                      Elevator
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="storage"
                      ml="3"
                      isChecked={form.storage}
                      onChange={handleCheck}
                    >
                      Storage
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="shelter"
                      ml={8}
                      isChecked={form.shelter}
                      onChange={handleCheck}
                    >
                      Shelter
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="mamad"
                      ml={8}
                      isChecked={form.mamad}
                      onChange={handleCheck}
                    >
                      Mamad
                    </Checkbox>
                  </Stack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Amenities
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <Stack spacing={10} direction="row">
                    <Checkbox
                      colorScheme="green"
                      name="cooling"
                      isChecked={form.cooling}
                      onChange={handleCheck}
                    >
                      Cooling
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="heating"
                      isChecked={form.heating}
                      onChange={handleCheck}
                    >
                      Heating
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="solar_water"
                      isChecked={form.solar_water}
                      onChange={handleCheck}
                    >
                      Solar Water
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="furnished"
                      isChecked={form.furnished}
                      onChange={handleCheck}
                    >
                      Furnitures
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="wheelchair"
                      isChecked={form.wheelchair}
                      onChange={handleCheck}
                    >
                      Wheelchair
                    </Checkbox>
                  </Stack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  {form.listing_type === 'sale' ? (
                    <>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          type="text"
                          maxW="15rem"
                          shadow="md"
                          placeholder="Price"
                          name="price"
                          value={form.price}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </>
                  ) : (
                    <>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          type="text"
                          maxW="15rem"
                          shadow="md"
                          placeholder="Month Price "
                          name="price_month"
                          value={form.price_month}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </>
                  )}
                  <FormLabel />
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      type="text"
                      maxW="15rem"
                      shadow="md"
                      placeholder="Property Tax"
                      name="arnona"
                      value={form.arnona}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <FormLabel />
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      type="text"
                      maxW="15rem"
                      shadow="md"
                      placeholder="Vaad Bait"
                      name="vaadbait"
                      value={form.vaadbait}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {form.listing_type === 'sale' ? (
                    <span />
                  ) : (
                    <>
                      <FormLabel />
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          type="text"
                          maxW="15rem"
                          shadow="md"
                          placeholder="Deposit"
                          name="deposit"
                          value={form.deposit}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </>
                  )}
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Publish
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <Stack isInline>
                    <Stack maxW="300px" maxH="400px">
                      <Card listing={form} />
                    </Stack>
                    <Box
                      direction="row"
                      maxW="700px"
                      rounded="20px"
                      fontSize="md"
                      boxShadow="lg"
                      p={3}
                    >
                      <Stack isInline align="baseline" spacing={4} flexWrap="wrap">
                        <Text ml={4} mb={2}>
                          <u>Type:</u> <b>{form.listing_type}</b>
                        </Text>
                        <Text mb={2}>
                          <u>City:</u> <b>{form.city}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Neighbourhood:</u> <b>{form.neighbourhood}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Street:</u> <b>{form.street}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Home Number:</u> <b>{form.home_number}</b>
                        </Text>
                        {form.type_type === 'appartment' ? (
                          <>
                            <Text mb={2}>
                              <u>Apartment Number:</u> <b>{form.appartment_number}</b>
                            </Text>
                          </>
                        ) : (
                          ''
                        )}
                        <Text mb={2}>
                          <u>Entrance:</u> <b>{form.entrance}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Housing Type:</u> <b>{form.type_type}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Size:</u> <b>{form.sqm}</b>
                        </Text>
                        {form.type_type === 'house' ? (
                          <>
                            <Text mb={2}>
                              <u>Lot Size:</u> <b>{form.lot_size}</b>
                            </Text>
                          </>
                        ) : (
                          ''
                        )}
                        <Text mb={2}>
                          <u>Rooms:</u> <b>{form.rooms}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Beds:</u> <b>{form.beds}</b>
                        </Text>
                        {form.listing_type === 'roommates' ? (
                          <>
                            <Text mb={2}>
                              <u>Beds Busy:</u> <b>{form.rooms_busy}</b>
                            </Text>
                          </>
                        ) : (
                          ''
                        )}
                        <Text mb={2}>
                          <u>Baths:</u> <b>{form.baths}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Total Floors:</u> <b>{form.total_floors}</b>
                        </Text>
                        {form.type_type === 'appartment' ? (
                          <>
                            <Text mb={2}>
                              <u>Apartment Floor:</u> <b>{form.apartment_floor}</b>
                            </Text>
                          </>
                        ) : (
                          ''
                        )}
                        <Text mb={2}>
                          <u>Balconies:</u> <b>{form.balconies}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Year Built:</u> <b>{form.year_built}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Renovated:</u> <b>{form.renovated ? 'Yes' : 'No'}</b>
                        </Text>
                        {form.listing_type === 'sale' ? (
                          ''
                        ) : (
                          <>
                            <Text mb={2}>
                              <u>Pets:</u> <b>{form.pets}</b>
                            </Text>
                          </>
                        )}
                        <Text mb={2}>
                          <u>View:</u> <b>{form.view}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Other Details:</u> <b>{form.details}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Parking:</u> <b>{form.parking_name}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Elevator:</u> <b>{form.elevator ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Storage:</u> <b>{form.storage ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Shelter:</u> <b>{form.shelter ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Mamad:</u> <b>{form.mamad ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Cooling:</u> <b>{form.cooling ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Heating:</u> <b>{form.heating ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Solar Water:</u> <b>{form.solar_water ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Furnitures:</u> <b>{form.furnished ? 'Yes' : 'No'}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Wheelchair:</u> <b>{form.wheelchair ? 'Yes' : 'No'}</b>
                        </Text>
                        {form.listing_type === 'sale' ? (
                          <>
                            <Text mb={2}>
                              <u>Price:</u> <b>{form.price}</b>
                            </Text>
                          </>
                        ) : (
                          <>
                            <Text mb={2}>
                              <u>Month Price:</u> <b>{form.price_month}</b>
                            </Text>
                          </>
                        )}
                        <Text mb={2}>
                          <u>Property Tax:</u> <b>{form.arnona}</b>
                        </Text>
                        <Text mb={2}>
                          <u>Vaad Bait:</u> <b>{form.vaadbait}</b>
                        </Text>
                        {form.listing_type === 'sale' ? (
                          ''
                        ) : (
                          <>
                            <Text mb={2}>
                              <u>Deposit:</u> <b>{form.deposit}</b>
                            </Text>
                          </>
                        )}
                      </Stack>
                    </Box>
                  </Stack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </form>
      </Container>
    </div>
  );
}
