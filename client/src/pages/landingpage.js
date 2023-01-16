import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Spacer,
  Button,
  Link
} from "@chakra-ui/react";

import { useAuth } from "../contexts/authentication";
import {NewNavLanding} from "../components/newnavbar/newnavlandingpage"
import {NewNavLandingLogin} from "../components/newnavbar/newnavlangpagelogin"
import { useNavigate } from "react-router-dom";


export function Landingpage() {
  const auth = useAuth();
  const Navigate = useNavigate()

  return (
    <Center w="100%" bg="#C7BAB1">
      <Box w="70%">
        
        {auth.isAuthenticated ? <NewNavLandingLogin /> : <NewNavLanding/>}
        <Image src="picture/header.png" alt="white watch" />
        <Box mt="2%" mb="2%">
          <Image src="picture/banner.png" alt="watch banner" onClick={(()=>{
                  Navigate("/products")
                })}/>
        </Box>
        <Box w="100%" h="100%" mt="2%" mb="2%">
          <Flex
            w={["100%", "100%", "100%", "100%"]}
            direction={["column", "column", "column", "row"]}
          >
            <Box w="100%" pt="4%" p="4%" bg="rgb(233, 229, 226,0.5)">
              <Text fontSize="2rem" bold color="#ffffff">
                DISCOVER YOUR BEST WATCH
              </Text>
              <Text fontSize="1.2rem" color="#ffffff">
                From the biggest designer brands, to the best of luxury and
                hidden gems. See our featured brands.
              </Text>
              <Button
                w="40%"
                h="14%"
                mt="6%"
                borderradius="25px"
                bg="rgb(174, 144, 118,0.4)"
                   _hover={{
                  bg: "#AA8B56",
                }}  
              >
                <Text fontSize={"1rem"} color="#ffffff"
               
                onClick={(()=>{
                  Navigate("/products")
                })}>
                  SEE MORE
                </Text>
              </Button>
            </Box>
            <Image
              src="picture/discover-watch.png"
              alt="Discover your best watch"
            />
          </Flex>
        </Box>
        <Box position="absolute" bottom="340px" left="180px"></Box>
        <Box position="relative" w="100%">
          <Image src="picture/footer-watch.png" alt="Black watch" />
        </Box>
        <Center>
          <Flex
            w="55%"
            direction="row"
            justify="space-between"
            position="absolute"
            bottom="5%"
          >
            <Image src="picture/logoland.png" alt="logo" w="12%" h="22%" />
            <Box w="18%">
              <Text 
              fontSize={"0.8rem"} 
              >SHOP</Text>
              <Link 
              href="/products/category/5" isExternal fontSize={"0.8rem"} >
              New Product 
              </Link>
              <br />
              <Link 
              href="/products/category/1" isExternal fontSize={"0.8rem"} >
              Men
              </Link>
              <br />
              <Link 
              href="/products/category/2" isExternal fontSize={"0.8rem"} >
              Women
              </Link>
              <br />
              <Link 
              href="/products/category/3" isExternal fontSize={"0.8rem"} >
              Kid
              </Link>
              <Link 
              href="/products/category/4" isExternal fontSize={"0.8rem"} >
              Accessories
              </Link>
              
             
            </Box>
            <Box w="20%">
              <Text fontSize={"0.8rem"}>SECURE PAYMENT</Text>
              <Image src="picture/payment.png" alt="payment-method" w="70%" />
            </Box>
            <Box w="20%" >

              <Text fontSize={"0.8rem"}>CONTACT</Text>
        
              <Link fontSize={"0.8rem"}>0897879876</Link>
              <br />
              <Link fontSize={"0.8rem"}>watchoddile@gmail.com</Link>
            </Box>
          </Flex>
        </Center>
        <Center w="100%" h="60px" bg="#ebe4d1">
          Copyright©2022 Watchodile.All Right Reserved.
        </Center>
      </Box>
    </Center>
  );
}
