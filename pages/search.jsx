import {
  Button,
  Flex,
  FormControl,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SimpleGrid,
  Skeleton,
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaSearch } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

import MockData from '../mock/results';

export default function Search() {
  const [saved, setSaved] = useState({});
  const [results, setResults] = useState(Array(24).fill(undefined));

  const handleSave = (id) => {
    if (saved[id]) {
      setSaved({ ...saved, [id]: false });
    } else {
      setSaved({ ...saved, [id]: true });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setResults(MockData);
    }, 2000);
  }, []);
  return (
    <div>
      <Head>
        <title>Batya - Search Page</title>
      </Head>
      <Flex justify="space-between" mr="4" bg="bg" shadow="xl" w="full">
        <FormControl>
          <HStack spacing={2} p={2} wrap="wrap">
            <Input type="text" size="md" maxW="2xs" placeholder="Search..." />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Home Type
              </MenuButton>
              <MenuList>
                <MenuItem>House</MenuItem>
                <MenuItem>Apartment</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Price
              </MenuButton>
              <MenuList>
                <MenuItem>Less than 200,000 $</MenuItem>
                <MenuItem>More than 200,000 $</MenuItem>
                <MenuItem>More than 500,000 $</MenuItem>
                <MenuItem>More than 1,000,000 $</MenuItem>
                <MenuItem>More than 2,000,000 $</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Size
              </MenuButton>
              <MenuList>
                <MenuItem>Less than 50 sqm</MenuItem>
                <MenuItem>More than 50 sqm</MenuItem>
                <MenuItem>More than 100 sqm</MenuItem>
                <MenuItem>More than 200 sqm</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Bedrooms
              </MenuButton>
              <MenuList>
                <MenuItem>More than 2</MenuItem>
                <MenuItem>More than 3</MenuItem>
                <MenuItem>More than 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button}>More Filters</MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup title="Amenities" type="checkbox">
                  <MenuItemOption value="cooling">Cooling</MenuItemOption>
                  <MenuItemOption value="heating">Heating</MenuItemOption>
                  <MenuItemOption value="furnished">Furnished</MenuItemOption>
                  <MenuItemOption value="solar_water">Solar Water</MenuItemOption>
                  <MenuItemOption value="wheelchair">Wheelchair</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title="Facilities" type="checkbox">
                  <MenuItemOption value="parking">Parking</MenuItemOption>
                  <MenuItemOption value="elevator">Elevator</MenuItemOption>
                  <MenuItemOption value="storage">Storage</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title="Housing" type="checkbox">
                  <MenuItemOption value="renovated">Renovated</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <IconButton aria-label="find" icon={<FaSearch />} size="md" colorScheme="blue" />
          </HStack>
        </FormControl>
        <HStack spacing={2} p={2}>
          <Menu>
            <MenuButton
              as={Button}
              // border="0.1rem #a4a4a4 solid"
              rightIcon={<ChevronDownIcon />}
              variant="outline"
            >
              Sort By
            </MenuButton>
            <MenuList>
              <MenuItem>Price</MenuItem>
              <MenuItem>Size</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <SimpleGrid columns={[2, null, 4, null, 5, 6]} spacing={4} p={4}>
        {results.map((item) => (
          <Skeleton isLoaded={item} maxW="300px" height="320px">
            {item && (
              <Card
                listing={item}
                saved={saved[item.property_property_id]}
                onSave={() => handleSave(item.property_property_id)}
              />
            )}
          </Skeleton>
        ))}
      </SimpleGrid>
    </div>
  );
}
