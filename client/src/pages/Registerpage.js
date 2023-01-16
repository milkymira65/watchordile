import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import axios from "axios";
import { useAuth } from "../contexts/authentication.js";
import {NewNavLanding} from "../components/newnavbar/newnavlandingpage"
import {NewNavLandingLogin} from "../components/newnavbar/newnavlangpagelogin"
import { useNavigate } from "react-router-dom";
import { NewNavProductDetail } from "../components/newnavbar/newNavProductDetail.js";


export function Register() {
  // const [showPassword, setShowPassword] = useState(false);
  // const [userProfile,setUserProfile] = useState({})
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [watch, setWatch] = useState([]);
  const { register } = useAuth();
  const auth = useAuth();
  const Navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstName,
      lastName,
      email,
    };
    register(data);
    // console.log(register);
  };

  
  return (
    <form
      className="registerForm"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Box bg="" w="100%" h="100%">
      {auth.isAuthenticated ? <NewNavLandingLogin /> : <NewNavProductDetail/>}


        <Flex direction="row" gap="30%">
          <Box>
            <Box position="relative" bg="#2C2C2C" w={[100,200,450]} h={[100,1050,1000]} ></Box>
            <Box position="absolute" top="15%">
              <Image src="picture/imagereg.png" w={[100,300,600]} />
            </Box>
          </Box>
          <Box>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={"5%"} mx={"auto"} maxW={"lg"} py={"25%"}>
                <Box w="150%">
                  <Stack spacing={4}>

                    <Box bg="" mt="10%" ml={[-20,-15,0]}>

                      <Spacer/>
                      <Text fontSize="3rem" textAlign="center" pb="5%" as="b" m="28%" >
                        Register
                      </Text>
                      <FormControl id="UserName" isRequired>
                        {/* <FormLabel fontSize={'20px'} >UserName</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Username"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                          value={username}
                        />
                        {/* <hr color='black' /> */}
                      </FormControl>
                      <FormControl
                        id="password"
                        isRequired
                        pt={"5%"}
                        // validate={validatePassword}
                      >
                        {/* <FormLabel  fontSize={'20px'} >Password</FormLabel> */}
                        <InputGroup>
                          <Input
                            // type={password ? "text" : "password"}
                            type="password"
                            variant="flushed"
                            placeholder="password"
                            fontSize={"1.2rem"}
                            isInvalid
                            errorBorderColor="#AA8B56"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            value={password}
                          />
                          <InputRightElement h={"full"}>
                           
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </Box>

                    <Box bg="" >
                      <FormControl id="firstName" isRequired>
                      {/* <FormLabel fontSize={'20px'}>First Name</FormLabel> */}
                        <Input
                        ml={[-20,-15,0]}
                          type="text"
                          variant="flushed"
                          placeholder="Firstname"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setFirstname(event.target.value);
                          }}
                          value={firstName}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName" isRequired>
                        {/* <FormLabel fontSize={'20px'} >Last Name</FormLabel> */}
                        <Input
                        bg=""
                        ml={[-20,-15,0]}
                          type="text"
                          variant="flushed"
                          placeholder="Lastname"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setLastname(event.target.value);
                          }}
                          value={lastName}
                        />
                      </FormControl>
                    </Box>

                    <FormControl id="email" isRequired>
                      {/* <FormLabel>Email address</FormLabel> */}
                      <Input
                      bg=""
                      ml={[-20,-15,0]}
                        type="email"
                        variant="flushed"
                        placeholder="Email"
                        fontSize={"1.2rem"}
                        isInvalid
                        errorBorderColor="#AA8B56"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        value={email}
                      />
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                       ml={[-20,-18,0]}
                        loadingText="Submitting"
                        size="md"
                        bg={"#CFB9AC"}
                        color={"white"}
                        _hover={{
                          bg: "#CFB9AC",
                        }}
                        fontSize={"20px"}
                        type="submit"
                        // onClick={() => {
                        //   validatePassword()
                        // }}
                      > 
                        SUBMIT
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"} fontSize={"20px"} as="b">
                        Already a user?{" "}
                        <Link href="/login" color={"#AC4425"} fontSize={"20px"}>
                          Login
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </form>
  );
}
