import { 
    Button, 
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
    Text 
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaSearch } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Search() {
    return (
        <div>
            <Head>
                <title>Batya - Search Page</title>
            </Head>
            <HStack spacing={2} p={2} bg="white" shadow="xl">
                <FormControl maxW="sm" color="black" alignSelf="center" display="flex">
                    <IconButton aria-label="find" icon={<FaSearch />} size="md" />   
                    <Input type="text" bgColor="white" size="md" placeholder="Search..." />
                </FormControl>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Price
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Range</MenuItem>
                    </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme="blue">
                        More Filters
                    </MenuButton>
                    <MenuList minWidth="240px">
                        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                            <MenuItemOption value="asc">Ascending</MenuItemOption>
                            <MenuItemOption value="desc">Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuDivider />
                        <MenuOptionGroup title="Appartment" type="checkbox">
                            <MenuItemOption value="size">Size</MenuItemOption>
                            <MenuItemOption value="bedrooms">Bedrooms</MenuItemOption>
                            <MenuItemOption value="bathrooms">Bathrooms</MenuItemOption>
                            <MenuItemOption value="homeType">Home Type</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
                <Text align="center">Sort by:</Text>
                <Menu>
                    <MenuButton as={Button} bg="white" border="0.1rem #a4a4a4 solid" rightIcon={<ChevronDownIcon />}>
                        Suggested
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Price</MenuItem>
                        <MenuItem>Size</MenuItem>
                        <MenuItem>Number of rooms</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <SimpleGrid minChildWidth="250px" spacing={4} p={4}>
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
                <Skeleton height="320px" />
            </SimpleGrid>
        </div>
    );
}