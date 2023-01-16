import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  Button,
  Avatar,
  keyframes,
  Heading,
  WrapItem
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {NewNavProductLogin} from "../components/newnavbar/newnavbarproducdetail-login"




export function ShowProfile() {
  const size = "150px";
  const color = "#EF9A53";
  const { state } = useAuth();
  console.log(state);
  const [avatars, setAvatars] = useState({});
  const Navigate = useNavigate();
  const handleFileChange = (event) => {
	  const uniqueId = Date.now();
	  setAvatars({
	    ...avatars,
	    [uniqueId]: event.target.files[0],
	  });
	};

  const pulseRing = keyframes`
        0% {
        transform: scale(0.33);
      }
      40%,
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
        `;

  return (
    <Box w="100%" h="100%" bg="#ffffff" position="relative">
     <NewNavProductLogin/>
     
      <Center>
      <Heading fontsize="6rem" color="#000000" mt="8%">
        Profile
      </Heading>
      </Center>
      <Flex
        position="absolute"
        top="10%"
        right="18%"
        justifyContent="center"
        alignItems="center"
        h="216px"
        w="200px"
        overflow="hidden"
      >
       
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: "relative",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-100%",
            borderRadius: "100%",
            bgColor: color,
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/300"
            size="full"
            position="absolute"
            top={0}
          />
        </Box>
      </Flex>


      <Center mt="5%">
        <Flex
          w="600px"
          h="400px"
          bgPosition="center"
          bg="#ffffff"
          direction="column"
        >
          <Stack spacing={3} direction="row" align="center">
            <Text fontSize="20px" w="150px" m="15px">
              First Name :
            </Text>

            <Text fontSize="20px" w="300px" mt="15px">
              {state.user.firstname}
            </Text>
          </Stack>
          <Stack spacing={3} direction="row" align="center">
            <Text fontSize="20px" w="150px" m="15px">
              Last Name
            </Text>
            <Text fontSize="20px" w="300px" mt="15px">
              {state.user.lastname}
            </Text>
          </Stack>

          <Stack spacing={3} direction="row" align="center">
            <Text fontSize="20px" w="150px" m="15px">
              Email
            </Text>
            <Text fontSize="20px" w="300px" mt="15px">
              {state.user.email}
            </Text>
            {/* 
            <Input
              variant="flushed"
              w="400px"
              isInvalid
              errorBorderColor="#AA8B56"
            /> */}
          </Stack>
          <Stack spacing={3} direction="row" m="15px">
            <Text fontSize="20px" w="100px">
              Address
            </Text>
            <Text fontSize="20px" w="100px" mt="5px"></Text>
            <Button text="#000000" variant="solid" bg="#CFB9AC" 
            onClick={() => {
              Navigate("/address");
            }}
            >
              Write Address
            </Button>
          </Stack>
        </Flex>
      </Center>
    </Box>
  );
}


