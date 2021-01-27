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
  Flex,
  Stack,
  InputLeftElement,
  Icon,
  InputGroup,
  Textarea,
  Spacer,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Card from '../../components/Card';

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

function AccordionTitle({
  children, position, ok, changeStep,
}) {
  const handleClick = () => {
    changeStep(position);
  };
  return (
    <AccordionButton onClick={handleClick}>
      <Text fontSize="lg" width="full" textAlign="left">
        <h4>{children}</h4>
      </Text>
      <HStack spacing={2}>
        {ok && <FaCheck color="#38A169" />}
        <AccordionIcon />
      </HStack>
    </AccordionButton>
  );
}

function FormInput({
  isRequired = false, name, title, type = 'text', handleChange, value,
}) {
  return (
    <FormControl id={name} isRequired={isRequired}>
      <FormLabel>{title}</FormLabel>
      <Input type={type} name={name} value={value} onChange={handleChange} />
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
    !!form.listing_type,
    !!form.city && !!form.street && !!form.home_number,
    !!form.type_type && !!form.sqm,
    !!form.parking_name,
    undefined,
    !!form.price || !!form.price_month,
  ];

  return (
    <div>
      <Head>
        <title>Batya - List A Home</title>
      </Head>
      <Container maxW="6xl" pt={3} pb={3}>
        <Box shadow="2xl">
          <Text ml="9" mb="9" mt="9" fontSize="3xl">
            <h2>List a home</h2>
          </Text>

          <form type="submit">
            <Accordion allowToggle index={step}>
              <AccordionItem number={0}>
                <AccordionTitle position={0} ok={checks[0]} changeStep={changeStep}>
                  Type
                </AccordionTitle>
                <AccordionPanel pb={4}>
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
                  <AccordionButtons position={0} changeStep={changeStep} ok={checks[0]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem number={1}>
                <AccordionTitle position={1} ok={checks[1]} changeStep={changeStep}>
                  Address
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  <FormControl>
                    <InputGroup>
                      <Stack align="baseline">
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
                              name="appartment_number"
                              title="Apartment Number"
                              handleChange={handleChange}
                              value={form.entrance}
                              type="number"
                            />
                            <FormControl id="entrance">
                              <FormLabel fontSize="md" mr="2">
                                Entrance
                              </FormLabel>
                              <Input
                                type="number"
                                maxW="3rem"
                                name="entrance"
                                value={form.entrance}
                                onChange={handleChange}
                              />
                            </FormControl>
                          </>
                        )}
                      </Stack>
                    </InputGroup>
                  </FormControl>
                  <AccordionButtons position={1} changeStep={changeStep} ok={checks[1]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={2} ok={checks[2]} changeStep={changeStep}>
                  Housing
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <FormControl>
                    <InputGroup>
                      <Stack align="baseline">
                        <FormControl isRequired>
                          <FormLabel>Housing Type</FormLabel>
                          <RadioGroup value={form.type_type} isRequired>
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
                        <FormControl>
                          <FormLabel>Size</FormLabel>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="sqm"
                            value={form.sqm}
                            onChange={handleChange}
                          />
                        </FormControl>
                        {form.type_type === 'house' && (
                          <>
                            <FormControl>
                              <FormLabel>Lot Size</FormLabel>
                              <Input
                                type="text"
                                maxW="5rem"
                                maxH="3rem"
                                name="sqm"
                                value={form.lot_size}
                                onChange={handleChange}
                              />
                            </FormControl>
                          </>
                        )}
                        <FormControl>
                          <FormLabel>Rooms</FormLabel>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="rooms"
                            value={form.rooms}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Beds</FormLabel>
                          <Input
                            type="text"
                            maxW="5rem"
                            maxH="3rem"
                            name="beds"
                            value={form.beds}
                            onChange={handleChange}
                          />
                        </FormControl>
                        {form.listing_type === 'roommates' && (
                          <>
                            <FormControl>
                              <FormLabel>Beds Busy</FormLabel>
                              <Input
                                type="text"
                                maxW="5rem"
                                maxH="3rem"
                                name="beds"
                                value={form.rooms_busy}
                                onChange={handleChange}
                              />
                            </FormControl>
                          </>
                        )}
                        <FormControl>
                          <FormLabel>Baths</FormLabel>
                          <Input
                            type="number"
                            maxW="5rem"
                            maxH="3rem"
                            name="beds"
                            value={form.baths}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Total Floors</FormLabel>
                          <Input
                            type="number"
                            maxW="5rem"
                            maxH="3rem"
                            name="beds"
                            value={form.total_floors}
                            onChange={handleChange}
                          />
                        </FormControl>
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
                  <AccordionButtons position={2} changeStep={changeStep} ok={checks[2]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={3} ok={checks[3]} changeStep={changeStep}>
                  Facilities
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <FormControl>
                    <Stack align="baseline">
                      <RadioGroup value={form.parking_name} isRequired>
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
                  <AccordionButtons position={3} changeStep={changeStep} ok={checks[3]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={4} ok={checks[4]} changeStep={changeStep}>
                  Amenities
                </AccordionTitle>
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
                  <AccordionButtons position={4} changeStep={changeStep} ok={checks[4]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={5} ok={checks[5]} changeStep={changeStep}>
                  Price
                </AccordionTitle>

                <AccordionPanel pb={4}>
                  <FormControl>
                    {form.listing_type === 'sale' ? (
                      <>
                        <InputGroup isRequired>
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
                        <InputGroup isRequired>
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
                  <AccordionButtons position={5} changeStep={changeStep} ok={checks[5]} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle position={6} ok={checks[6]} changeStep={changeStep}>
                  Photos
                </AccordionTitle>
                <AccordionPanel pb={4}>
                  Photos here
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
                            <u>Type:</u>
                            {' '}
                            <b>{form.listing_type}</b>
                          </Text>
                          <Text mb={2}>
                            <u>City:</u>
                            {' '}
                            <b>{form.city}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Neighbourhood:</u>
                            {' '}
                            <b>{form.neighbourhood}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Street:</u>
                            {' '}
                            <b>{form.street}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Home Number:</u>
                            {' '}
                            <b>{form.home_number}</b>
                          </Text>
                          {form.type_type === 'appartment' ? (
                            <>
                              <Text mb={2}>
                                <u>Apartment Number:</u>
                                {' '}
                                <b>{form.appartment_number}</b>
                              </Text>
                            </>
                          ) : (
                            ''
                          )}
                          <Text mb={2}>
                            <u>Entrance:</u>
                            {' '}
                            <b>{form.entrance}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Housing Type:</u>
                            {' '}
                            <b>{form.type_type}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Size:</u>
                            {' '}
                            <b>{form.sqm}</b>
                          </Text>
                          {form.type_type === 'house' ? (
                            <>
                              <Text mb={2}>
                                <u>Lot Size:</u>
                                {' '}
                                <b>{form.lot_size}</b>
                              </Text>
                            </>
                          ) : (
                            ''
                          )}
                          <Text mb={2}>
                            <u>Rooms:</u>
                            {' '}
                            <b>{form.rooms}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Beds:</u>
                            {' '}
                            <b>{form.beds}</b>
                          </Text>
                          {form.listing_type === 'roommates' ? (
                            <>
                              <Text mb={2}>
                                <u>Beds Busy:</u>
                                {' '}
                                <b>{form.rooms_busy}</b>
                              </Text>
                            </>
                          ) : (
                            ''
                          )}
                          <Text mb={2}>
                            <u>Baths:</u>
                            {' '}
                            <b>{form.baths}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Total Floors:</u>
                            {' '}
                            <b>{form.total_floors}</b>
                          </Text>
                          {form.type_type === 'appartment' ? (
                            <>
                              <Text mb={2}>
                                <u>Apartment Floor:</u>
                                {' '}
                                <b>{form.apartment_floor}</b>
                              </Text>
                            </>
                          ) : (
                            ''
                          )}
                          <Text mb={2}>
                            <u>Balconies:</u>
                            {' '}
                            <b>{form.balconies}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Year Built:</u>
                            {' '}
                            <b>{form.year_built}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Renovated:</u>
                            {' '}
                            <b>{form.renovated ? 'Yes' : 'No'}</b>
                          </Text>
                          {form.listing_type === 'sale' ? (
                            ''
                          ) : (
                            <>
                              <Text mb={2}>
                                <u>Pets:</u>
                                {' '}
                                <b>{form.pets}</b>
                              </Text>
                            </>
                          )}
                          <Text mb={2}>
                            <u>View:</u>
                            {' '}
                            <b>{form.view}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Other Details:</u>
                            {' '}
                            <b>{form.details}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Parking:</u>
                            {' '}
                            <b>{form.parking_name}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Elevator:</u>
                            {' '}
                            <b>{form.elevator ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Storage:</u>
                            {' '}
                            <b>{form.storage ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Shelter:</u>
                            {' '}
                            <b>{form.shelter ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Mamad:</u>
                            {' '}
                            <b>{form.mamad ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Cooling:</u>
                            {' '}
                            <b>{form.cooling ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Heating:</u>
                            {' '}
                            <b>{form.heating ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Solar Water:</u>
                            {' '}
                            <b>{form.solar_water ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Furnitures:</u>
                            {' '}
                            <b>{form.furnished ? 'Yes' : 'No'}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Wheelchair:</u>
                            {' '}
                            <b>{form.wheelchair ? 'Yes' : 'No'}</b>
                          </Text>
                          {form.listing_type === 'sale' ? (
                            <>
                              <Text mb={2}>
                                <u>Price:</u>
                                {' '}
                                <b>{form.price}</b>
                              </Text>
                            </>
                          ) : (
                            <>
                              <Text mb={2}>
                                <u>Month Price:</u>
                                {' '}
                                <b>{form.price_month}</b>
                              </Text>
                            </>
                          )}
                          <Text mb={2}>
                            <u>Property Tax:</u>
                            {' '}
                            <b>{form.arnona}</b>
                          </Text>
                          <Text mb={2}>
                            <u>Vaad Bait:</u>
                            {' '}
                            <b>{form.vaadbait}</b>
                          </Text>
                          {form.listing_type === 'sale' ? (
                            ''
                          ) : (
                            <>
                              <Text mb={2}>
                                <u>Deposit:</u>
                                {' '}
                                <b>{form.deposit}</b>
                              </Text>
                            </>
                          )}
                        </Stack>
                      </Box>
                    </Stack>
                  </FormControl>
                  <AccordionButtons position={7} changeStep={changeStep} ok={checks[7]} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </Box>
      </Container>
    </div>
  );
}
