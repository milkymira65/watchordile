import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/authentication.js";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username,
      password,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            w="500px"
            p="20%"
            boxShadow="3lg"
            maxW={"md"}
            bg="rgba(46, 37, 39, 0.2)"
            backdropFilter="auto"
            backdropBlur="8px"
          >
            <Text fontSize="2.5rem" pb="5%">
              <center>LOG IN</center>
            </Text>
            <FormControl id="username">
              <FormLabel fontSize="1.2rem">Username</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaUserAlt />} />
                <Input
                  type="username"
                  bg="rgba(46, 37, 39, 0.3)"
                  focusBorderColor="black"
                  placeholder="Enter username"
                  
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  value={username}


                  
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize="1.2rem">Password</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaLock />} />
                <Input
                  type="password"
                  focusBorderColor="black"
                  placeholder="Enter password"
                  bg="rgba(46, 37, 39, 0.3)"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button bg="#CFB9AC" variant={"solid"} type="submit">
                Log in
              </Button>
              <Link href="/register">
                <center>Create account</center>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </form>
  );
}
