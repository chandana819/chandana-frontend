import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    VStack,
    Flex,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { api } from '../../actions/api';
  import axios from 'axios';

  
  export const Signup =() => {
    const  [Name, setName] = useState()
    const [Registerno, setRegister] =useState()
    const  [Email, setEmail] = useState()
    const [Password, setPassword] =useState()
    
    const Signup = async ()=>{
      await axios.post(api+"/signup",{Name,Registerno,Email,Password})
      .then((res)=>{
        console.log(res?.data)
         if(res.data.message){
          console.log(res?.data?.values)
          alert(res.data.message)
         }else{
          alert(res.data.message)
         }
      })
    }

    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="gray.100"
        p={4}
      >
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          width={{ base: '90%', sm: '80%', md: '60%', lg: '40%' }}
        >
          <VStack spacing={4} align="stretch">
            <form>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" />
              </FormControl>
              
              <FormControl id="registerno">
                <FormLabel>Registerno</FormLabel>
                <Input type="text" placeholder="Enter your register number" />
              </FormControl>
  
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
  
              <Flex direction="column" align="stretch" mt={4}>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>
  
                <FormControl id="confirmpassword" mt={4}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" placeholder="Confirm your password" />
                  <FormHelperText>Your password is secure with us.</FormHelperText>
                </FormControl>
              </Flex>
  
              <Button
                mt={4}
                colorScheme="blue"
                width="full"
                type="submit"
                onclick={Signup}
              >
              Sign Up
              </Button>
              <p>Already have an account ?<a href='./signin'>Signin</a></p>

            </form>
          </VStack>
        </Box>
      </Box>
    );
  };