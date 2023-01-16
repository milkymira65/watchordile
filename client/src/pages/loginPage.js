import { Box,Flex,Center } from "@chakra-ui/react";
import { LoginForm } from "../components/loginForm";
import { Time } from "../components/time";
import { ParticleLogin } from "../components/particle";

export function LoginPage() {
  return (
    <Flex w="100%" h="100%">
      <Box mt="50px" ml="10%"  >
       <Time   />
       </Box>
       <Box m="10px">
       <Center ml="300px">
      <ParticleLogin />
      <LoginForm position="relative" />
      </Center>
      </Box>
    </Flex>
  );
}
