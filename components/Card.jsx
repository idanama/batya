import { Badge, Box, Image, Text, Stack } from "@chakra-ui/react";

export default function Card() {
    return (
        <Box rounded='20px' overflow='hidden' boxShadow='lg'>
            <Image src='https://i.pinimg.com/originals/37/c0/84/37c084c0a98a8aba89c3483d3f19ad03.jpg' alt="Housing Image" minHeight='200px' />
            <Box p={3}>
                <Stack isInline align='baseline' justify='space-between'>
                    <Text as='h1' fontWeight='semibold' fontSize='md'>$2,140,366</Text>
                    <Badge variant='solid' bgColor='blue' rounded='full' px={2}>Est.Payment</Badge>
                </Stack> 
                <Text fontSize='md' py={2}>6 Beds | 2 Baths | 1,590 Sqft</Text>
                <Text fontSize='sm'>381 Oak St. Orlando, CA 13010</Text>
            </Box>
        </Box>
    );
} 