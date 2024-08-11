
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Box,
    useBreakpointValue,
    Text
}from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { api } from '../../actions/api';

export const Signin = () => {
    // State to manage form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        try {
            const response = await axios.post(`${api}/signin`, { email, password });
            if (response.data && response.data.success) {
                console.log(response.data.values); // Log successful response data
                alert('Login successful');
                // Optionally, redirect or handle successful login
                // Example: window.location.href = "/dashboard";
            } else {
                alert('User not found or incorrect credentials');
                // Redirect to signup page if needed
                // window.location.href = "/signup";
            }
        } catch (e) {
            setError('An error occurred during sign-in.');
            console.error('Error:', e);
        }
    };

    const containerWidth = useBreakpointValue({ base: "90%", md: "400px" });

    return (
        <Box
            as="form"
            onSubmit={handleSubmit}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            bg="black"
            color="white"
            maxW={containerWidth}
            mx="auto"
            mt={12}
        >
            <Stack spacing={4}>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        variant="outline"
                        focusBorderColor="teal.500"
                        color="white"
                        borderColor="gray.600"
                        border="solid 2px green"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Text mt={1} fontSize="sm" fontWeight="bold" color="gray.400">
                        We'll never share your email.
                    </Text>
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        variant="outline"
                        focusBorderColor="teal.500"
                        color="white"
                        borderColor="gray.600"
                        border="solid 2px green"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Text mt={1} fontSize="sm" fontWeight="bold" color="gray.400">
                        We'll never share your password.
                    </Text>
                </FormControl>
                {error && <Text color="red.400" mt={2}>{error}</Text>}

            <a href="./forgotpage">Forgot Password</a>
                <Button
                    colorScheme="teal"
                    type="submit"
                    size="lg"
                    mt={4}
                >
                    Sign In
                </Button>
                <Text mt={4} textAlign="center">
                    Don't have an account? <a href="./signup" style={{ color: 'teal.500' }}>Signup</a>
                </Text>
            </Stack>
        </Box>
    );
};
