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
  Button,
  Grid,
  SimpleGrid,
  Flex,
  Stack,
  InputLeftElement,
  Icon,
  InputGroup,
  Textarea,
  Spacer,
  VStack,
  InputRightElement,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios';
import Card from '../../components/Card';
import { Dropzone } from '../../components/dropzone';
import DateAvailable from '../../components/DateAvailable';

function AccordionButtons({ position, changeStep, ok }) {
  return (
    <Flex mt={2}>
      <Button onClick={() => position > 0 && changeStep(position - 1)} disabled={position === 0}>
        Previous
      </Button>
      <Spacer />
      <Button colorScheme="teal" onClick={() => changeStep(position + 1)} disabled={!ok}>
        Next
      </Button>
    </Flex>
  );
}

function AccordionTitle({ children, position, ok, changeStep }) {
  const handleClick = () => {
    changeStep(position);
  };
  return (
    <AccordionButton onClick={handleClick}>
      <Text as="h4" fontSize="lg" width="full" textAlign="left">
        {children}
      </Text>
      <HStack spacing={2}>
        {ok && <FaCheck color="#38A169" />}
        <AccordionIcon />
      </HStack>
    </AccordionButton>
  );
}

function FormInput({
  isRequired = false,
  name,
  title,
  type = 'text',
  handleChange,
  value,
  left,
  right,
}) {
  return (
    <FormControl id={name} isRequired={isRequired}>
      <FormLabel>{title}</FormLabel>
      <InputGroup>
        {left && (
          <InputLeftElement pointerEvents="none" color="gray.400">
            {left}
          </InputLeftElement>
        )}
        <Input type={type} name={name} value={value} onChange={handleChange} />
        {right && (
          <InputRightElement pointerEvents="none" color="gray.400">
            {right}
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}

export default function ListAHome() {
  const [step, setStep] = useState(0);
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
    photos: '',
  });

  const changeStep = (destination) => {
    if (destination === step) {
      return setStep(-1);
    }
    return setStep(destination);
  };

  const handleChange = (e) => {
    setForm((curForm) => ({ ...curForm, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setForm((curForm) => ({ ...curForm, [e.target.name]: e.target.checked }));
  };

  const checks = [
    !!form.listing_type && !!form.type_type,
    !!form.city && !!form.street && !!form.home_number,
    !!form.sqm,
    !!form.parking_name,
    !!form.wheelchair || !!form.cooling || !!form.heating || !!form.solar_water || !!form.furnished,
    !!form.price || !!form.price_month,
    !!form.photos,
  ];

  const handlePublish = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key === 'photos') {
        // Object.keys(form.photos).forEach((photo) => {
        form[key].forEach((photo, i) => {
          formData.append(`photo${i}`, photo);
        });
      } else if (form[key] !== '') {
        if (key === 'mamad') {
          formData.append('shelter', form[key]);
        } else if (key === 'listing_type') {
          formData.append('type_type', form[key]);
        } else {
          formData.append(key, form[key]);
        }
      }
    });
    const res = await fetch('/api/properties', { method: 'POST', body: formData });
    console.log(res);
  };

  return (
    <div>
      <Head>
        <title>Batya - List A Home</title>
      </Head>
      <Container maxW="3xl" pt={3} pb={3}>
        <Box shadow="2xl">
          <Text as="h2" p="9" fontSize="3xl">
            List a home
          </Text>

          <form type="submit">
            <Accordion allowToggle index={step}>
              <AccordionItem number={0}>
                <AccordionTitle position={0} ok={checks[0]} changeStep={changeStep}>
                  Type
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  <VStack spacing={4} py={4}>
                    <FormControl as="fieldset" isRequired>
                      <FormLabel>Listing Type</FormLabel>
                      <RadioGroup value={form.listing_type} name="listing_type">
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
                    <FormControl isRequired>
                      <FormLabel>Housing Type</FormLabel>
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
                    </FormControl>
                  </VStack>
                  <AccordionButtons position={0} changeStep={changeStep} ok={checks[0]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem number={1}>
                <AccordionTitle position={1} ok={checks[1]} changeStep={changeStep}>
                  Address
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  <InputGroup>
                    <Stack align="baseline" py={4} spacing={4}>
                      <FormInput
                        isRequired
                        name="city"
                        title="City"
                        handleChange={handleChange}
                        value={form.city}
                      />
                      <FormInput
                        name="neighbourhood"
                        title="Neighbourhood"
                        handleChange={handleChange}
                        value={form.neighbourhood}
                      />
                      <FormInput
                        isRequired
                        name="street"
                        title="Street"
                        handleChange={handleChange}
                        value={form.street}
                      />
                      <FormInput
                        isRequired
                        name="home_number"
                        title="Home Number"
                        handleChange={handleChange}
                        value={form.home_number}
                        type="number"
                      />
                      {form.type_type === 'appartment' && (
                        <>
                          <FormInput
                            name="appartment_number"
                            title="Apartment Number"
                            handleChange={handleChange}
                            value={form.appartment_number}
                            type="number"
                          />
                          <FormInput
                            name="entrance"
                            title="Entrance"
                            handleChange={handleChange}
                            value={form.entrance}
                            type="number"
                          />
                        </>
                      )}
                    </Stack>
                  </InputGroup>
                  <AccordionButtons position={1} changeStep={changeStep} ok={checks[1]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={2} ok={checks[2]} changeStep={changeStep}>
                  House Details
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <SimpleGrid columns={2} spacing={6} py={4}>
                    <FormInput
                      title="Size"
                      name="sqm"
                      handleChange={handleChange}
                      value={form.sqm}
                      type="number"
                      isRequired
                      right="m²"
                    />
                    <FormControl>
                      <FormLabel>Date Available</FormLabel>
                      <Button variant="outline" w="full">
                        <DateAvailable
                          value={form.date_available}
                          handleDateChange={(date) => setForm({ ...form, date_available: date })}
                        />
                      </Button>
                    </FormControl>
                    {form.type_type === 'house' && (
                      <>
                        <FormInput
                          title="Lot Size"
                          name="lot_size"
                          handleChange={handleChange}
                          value={form.lot_size}
                          type="number"
                        />
                      </>
                    )}
                    <FormInput
                      isRequired
                      title="Total Rooms"
                      name="rooms"
                      handleChange={handleChange}
                      value={form.rooms}
                      type="number"
                    />
                    <FormInput
                      isRequired
                      title="Bed Rooms"
                      name="beds"
                      handleChange={handleChange}
                      value={form.beds}
                      type="number"
                    />
                    {form.listing_type === 'roommates' && (
                      <>
                        <FormInput
                          isRequired
                          title="Occupied Bed Rooms"
                          name="beds"
                          value={form.rooms_busy}
                          type="number"
                          handleChange={handleChange}
                        />
                      </>
                    )}
                    <FormInput
                      title="Bath Rooms"
                      name="baths"
                      value={form.baths}
                      type="number"
                      handleChange={handleChange}
                    />
                    {form.type_type === 'appartment' && (
                      <>
                        <FormInput
                          title="Apartment Floor"
                          name="apartment_floor"
                          value={form.apartment_floor}
                          type="number"
                          handleChange={handleChange}
                        />
                      </>
                    )}
                    <FormInput
                      title="Total Floors"
                      name="total_floors"
                      value={form.total_floors}
                      type="number"
                      handleChange={handleChange}
                    />
                    <FormInput
                      title="Balconies"
                      name="balconies"
                      value={form.balconies}
                      type="number"
                      handleChange={handleChange}
                    />
                    <FormInput
                      title="Year Built"
                      name="year_built"
                      value={form.year_built}
                      type="number"
                      handleChange={handleChange}
                    />
                    <FormInput
                      title="View"
                      name="view"
                      value={form.view}
                      type="text"
                      handleChange={handleChange}
                    />
                    <FormInput
                      title="Other Details"
                      name="view"
                      value={form.details}
                      type="text"
                      handleChange={handleChange}
                    />
                  </SimpleGrid>
                  <VStack spacing={4} w="full" alignItems="flex-start">
                    {form.listing_type !== 'sale' && (
                      <>
                        <RadioGroup value={form.pets}>
                          <Text fontSize="md">Pets</Text>
                          <SimpleGrid columns={2} spacing={4} py={2}>
                            <Radio onChange={handleChange} name="pets" value="allowed">
                              All Pets Allowed
                            </Radio>
                            <Radio onChange={handleChange} name="pets" value="allows_large_dog">
                              Allows Dogs
                            </Radio>
                            <Radio onChange={handleChange} name="pets" value="allows_small-dog">
                              Allows Small Dogs
                            </Radio>
                            <Radio onChange={handleChange} name="pets" value="allows-cat">
                              Allows Cats
                            </Radio>
                            <Radio onChange={handleChange} name="pets" value="not_allowed">
                              No Pets Allowed
                            </Radio>
                          </SimpleGrid>
                        </RadioGroup>
                      </>
                    )}
                    <Checkbox
                      colorScheme="green"
                      ml="2"
                      name="renovated"
                      isChecked={form.renovated}
                      onChange={handleCheck}
                    >
                      Renovated
                    </Checkbox>
                  </VStack>
                  <AccordionButtons position={2} changeStep={changeStep} ok={checks[2]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={3} ok={checks[3]} changeStep={changeStep}>
                  Facilities
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <FormControl isRequired>
                    <Stack align="baseline" spacing={4} py={4}>
                      <RadioGroup value={form.parking_name}>
                        <Text fontSize="md">Parking</Text>
                        <HStack spacing={4}>
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
                  <AccordionButtons position={3} changeStep={changeStep} ok={checks[3]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={4} ok={checks[4]} changeStep={changeStep}>
                  Amenities
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  <FormControl>
                    <Stack spacing={4} py={4} direction="column">
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
                        Furnished
                      </Checkbox>
                      <Checkbox
                        colorScheme="green"
                        name="wheelchair"
                        isChecked={form.wheelchair}
                        onChange={handleCheck}
                      >
                        Wheelchair Accessible
                      </Checkbox>
                    </Stack>
                  </FormControl>
                  <AccordionButtons position={4} changeStep={changeStep} ok={checks[4]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={5} ok={checks[5]} changeStep={changeStep}>
                  Price
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <SimpleGrid columns={2} spacing={4} py={4}>
                    {form.listing_type === 'sale' ? (
                      <FormControl isRequired>
                        <FormLabel>Sale Price</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            ₪
                          </InputLeftElement>
                          <Input
                            type="text"
                            shadow="md"
                            placeholder="Sale Price"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                    ) : (
                      <FormControl isRequired>
                        <FormLabel>Monthly Price</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            ₪
                          </InputLeftElement>
                          <Input
                            type="text"
                            placeholder="Monthly Price "
                            name="price_month"
                            value={form.price_month}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                    <FormControl>
                      <FormLabel>Property Tax</FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                          ₪
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Property Tax"
                          name="arnona"
                          value={form.arnona}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Vaad Bait</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="₪"
                        />
                        <Input
                          type="text"
                          placeholder="Vaad Bait"
                          name="vaadbait"
                          value={form.vaadbait}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    {form.listing_type !== 'sale' && (
                      <FormControl>
                        <FormLabel>Deposit</FormLabel>
                        <FormLabel />
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="₪"
                          />
                          <Input
                            type="text"
                            placeholder="Deposit"
                            name="deposit"
                            value={form.deposit}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                  </SimpleGrid>
                  <AccordionButtons position={5} changeStep={changeStep} ok={checks[5]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={6} ok={checks[6]} changeStep={changeStep}>
                  Photos
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  <Dropzone handleFiles={(files) => setForm({ ...form, photos: files })} />
                  <AccordionButtons position={6} changeStep={changeStep} ok={checks[6]} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle position={7} ok={checks[7]} changeStep={changeStep}>
                  Publish
                </AccordionTitle>
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
                  <Flex direction="row-reverse" my={4}>
                    <Button type="submit" colorScheme="teal" onClick={handlePublish}>
                      Publish
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </Box>
      </Container>
    </div>
  );
}
