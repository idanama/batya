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
  Button,
  Select,
  Textarea,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';

export default function ListAHome() {
  const [form, setForm] = useState({
    listing_type: 'rental', // Done / TODO back end integration of listing type
    sqm: '', // Done
    beds: '', // Done
    baths: '', // Done
    year_built: '', // Done
    cooling: false, // Done
    heating: false, // Done
    furnished: false, // Done
    details: '', // Done
    arnona: '', // Done
    deposit: '', // Done
    mamad: '', // Done
    parking_name: 'garage', // ['Garage', 'Off street', null]
    view: '', // Done
    total_floors: '', // Done
    apartment_floor: '', // Done
    lot_size: '',
    rooms: '', // Done
    balconies: '', // Done
    shelter: false, // Done
    elevator: false, // Done
    renovated: false, // Done
    solar_water: false, // Done
    wheelchair: false, // Done
    storage: false, // Done
    vaadbait: '', // Done
    price: '', // Done
    price_month: '',
    pets: '',
    date_available: '',
    type_type: 'house',
    bedrooms_busy: '',
    city: '',
    neighbourhood: '',
    street: '',
    home_number: '',
    apartment_number: '',
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
                      {form.type_type === 'apartment' ? (
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
                            name="apartment_number"
                            value={form.apartment_number}
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                          <span></span>
                      )}
                      <Text fontSize="md">
                        Entrance
                      </Text>
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
                      <Text fontSize="md" mb="1">Housing Type</Text>
                      <RadioGroup value={form.type_type}>
                        <HStack spacing="24px">
                          <Radio onChange={handleChange} name="type_type" value="house">
                            House
                          </Radio>
                          <Radio onChange={handleChange} name="type_type" value="apartment">
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
                      <FormLabel />
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
                      {form.listing_type === "roommates" ? (
                        <>
                          <FormLabel />
                          <Text fontSize="md" mr="2">
                            Beds Busy
                          </Text>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="bedrooms_busy"
                            value={form.bedrooms_busy}
                            onChange={handleChange}
                          />
                          <FormLabel />
                        </>
                      ) : (
                          <span></span>
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
                      <FormLabel />
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
                  {form.listing_type === "sale" ? (
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
                  {form.listing_type === "sale" ? (
                    <span></span>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </form>
      </Container>
    </div >
  );
}
