import { 
    Button, 
    FormControl, 
    HStack, 
    IconButton, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    Menu, 
    MenuButton, 
    MenuDivider, 
    MenuItem, 
    MenuItemOption, 
    MenuList, 
    MenuOptionGroup, 
    SimpleGrid, 
    Skeleton, 
    Stack, 
    Text 
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaSearch } from 'react-icons/fa';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Card from '../components/Card';

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
                        Home Type
                    </MenuButton>
                    <MenuList>
                        <MenuItem>House</MenuItem>
                        <MenuItem>Appartment</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Price
                    </MenuButton>
                    <MenuList>
                        <Stack isInline align='baseline'>
                            <Text fontSize='md'>Until</Text>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                                children="$"
                                />
                                <Input type='text' placeholder="Price" />
                                <Button ml={2}>Save</Button>
                            </InputGroup>
                        </Stack>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Size
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Range</MenuItem>
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
                    <MenuButton as={Button} colorScheme="blue">
                        More Filters
                    </MenuButton>
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
                <Menu>
                    <MenuButton as={Button} bg="white" border="0.1rem #a4a4a4 solid" rightIcon={<ChevronDownIcon />}>
                        Sort by
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Price</MenuItem>
                        <MenuItem>Size</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <SimpleGrid minChildWidth="300px" spacing={4} p={4}>
                <Card></Card>
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