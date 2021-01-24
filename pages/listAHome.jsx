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
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';

export default function ListAHome() {
  const [form, setForm] = useState({
    listing_type: 'rental', /// TODO back end integration of listing type
    sqm: '',
    beds: '',
    baths: '',
    year_built: '',
    cooling: false,
    heating: false,
    furnished: false,
    details: '',
    arnona: '',
    parking_name: '', // ['Garage', 'Off street', null]
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
    type_type: '',
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
                  Size and Rooms
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl>
                  <InputGroup>
                    <Stack isInline align="baseline">
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
                  <Stack spacing={10} direction="row">
                    <Checkbox colorScheme="green">Parking</Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="elevator"
                      isChecked={form.elevator}
                      onChange={handleCheck}
                    >
                      Elevator
                    </Checkbox>
                    <Checkbox
                      colorScheme="green"
                      name="storage"
                      isChecked={form.storage}
                      onChange={handleCheck}
                    >
                      Storage
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
    </div>
  );
}
