import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication";
import { useState, useEffect } from "react";
import axios from "axios";
import { NewNavProductDetail } from "../components/newnavbar/newNavProductDetail";
import {NewNavProductLogin} from "../components/newnavbar/newnavbarproducdetail-login"
import { useNavigate } from "react-router-dom";
import {Stars} from "../components/particlesnow";
import { ParticleLogin } from "../components/particle";



export function Address() {
  const address = useAuth();
  const [phoneNumber, setPhonenumber] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [village, setVillage] = useState("");
  const [lane, setLane] = useState("");
  const [road, setRoad] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvice] = useState("");
  const [zipcode, serZipcode] = useState("");
  const [totalAddress, setTotalAddress] = useState([]);
  const Navigate = useNavigate();
  const auth = useAuth();

  // const postAddress = async (data) => {
  //   const result = await axios.post("http:localhost/4000/user/dilivery", data);
  //   setTotalAddress(result.data.data);
  //   console.log(totalAddress);
  // };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      phoneNumber,
      houseNumber,
      village,
      lane,
      road,
      subdistrict,
      district,
      province,
      zipcode,
    };
    address(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        w="100%"
        h="100%"
       
        position="relative"
      > 
        <Box >
          {auth.isAuthenticated ? <NewNavProductLogin/> : <NewNavProductDetail/>}
      </Box>      <Stars/>
       {/* <ParticleLogin /> */}


      <Center>
<Box w="75%" h="80%"  mt="3%"   borderRadius="20px"shadow="xl" bg="rgb(255, 216, 169,0.3)" backdropFilter="auto"
            backdropBlur="8px" >
        <Center>
          <Heading text="#000000" mt="5%">
            ADDRESS
          </Heading>
        </Center>
        <Flex direction="row" align="center" justify="center">
          <Center>
            <Flex
              w="500px"
              h="300px"
              bgPosition="center"
              direction="column"
              m="50px"
            >
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="150px" m="15px">
                  Phone Number
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setPhonenumber(event.target.value);
                  }}
                  value={phoneNumber}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="150px" m="15px">
                  House No.
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setHouseNumber(event.target.value);
                  }}
                  value={houseNumber}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="150px" m="15px">
                  Village
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setVillage(event.target.value);
                  }}
                  value={village}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="150px" m="15px">
                  Lane/Soi
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setLane(event.target.value);
                  }}
                  value={lane}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="150px" m="15px">
                  Road/Street
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setRoad(event.target.value);
                  }}
                  value={road}
                />
              </Stack>
            </Flex>
          </Center>

          <Center>
            <Flex w="550px" h="300px" bgPosition="center" direction="column" mr="50px">
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="200px" m="15px">
                  Sub-district/Sub-area
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setSubdistrict(event.target.value);
                  }}
                  value={subdistrict}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="200px" m="15px">
                  District/Area
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setDistrict(event.target.value);
                  }}
                  value={district}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="200px" m="15px">
                  Province
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    setProvice(event.target.value);
                  }}
                  value={province}
                />
              </Stack>
              <Stack spacing={3} direction="row">
                <Text fontSize="20px" w="200px" m="15px">
                  Postal Code/Zip Code
                </Text>
                <Input
                  variant="flushed"
                  w="300px"
                  isInvalid
                  errorBorderColor="#AA8B56"
                  onChange={(event) => {
                    serZipcode(event.target.value);
                  }}
                  value={zipcode}
                />
              </Stack>
            </Flex>
          </Center>
        </Flex>
        <Center>
 <Flex >
       
          <Button
           mr="5%"
           mb="30px"
            text="#ffffff"
            variant="solid"
            bg="#AA8B56"
            w="100px"
            onClick={() => {
              Navigate("/payment");
            }}  
            _hover={{
              bg: "#5F8D4E",
             
            }} 
            
          >
            SUBMIT
          </Button>
        
          {/* <Button text="#ffffff" variant="solid" bg="#CFB9AC" w="200px" 
           _hover={{
            textDecoration: "#ffffff",
            bg: "#CE7777",
          }} >
            NEW ADDRESS
          </Button> */}
        
</Flex>
</Center>
</Box>
</Center>
      </Box>
    </form>
  );
}

