import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack,
} from "@chakra-ui/react"
import { useState } from "react";



export default function DateAvailable() {
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

    return (
        <>
            <NumberInput value={form.date_available} size="sm" maxW={20} defaultValue={1} min={1} max={12}>
            <Stack isInline>
                <NumberInputField onChange={handleChange} name="date_available" value="1" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                <NumberInputField onChange={handleChange} name="date_available" value="1" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </Stack>
            </NumberInput>
            <NumberInput value={form.date_available} size="sm" maxW={20} defaultValue={2021} min={2021} max={2026}>
                <NumberInputField onChange={handleChange} name="date_available" value="1" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </>
    );
}