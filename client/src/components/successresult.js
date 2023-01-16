import { Box, Heading, Text ,Image, Center,Button,Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { NewNavLanding } from "../components/newnavbar/newnavlandingpage";
import { NewNavLandingLogin } from "../components/newnavbar/newnavlangpagelogin";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router-dom";




export default function Success() {
  const Navigate = useNavigate()
  const auth = useAuth();
  return (


<Box as="Big-Box">
      <Box >
          {auth.isAuthenticated ? <NewNavLandingLogin /> : <NewNavLanding/>}
      </Box>

    <Box 
    w="100%"
    h="100%"
    textAlign="center" py={10} px={6}  mt="80px" >
      <CheckCircleIcon boxSize={'50px'} color= "#A4BE7B" />
      <Heading as="h2" size="2xl" mt={6} mb={2} color="#9a7352">
      Successful Payment
      </Heading>
      <Text 
      fontSize="30px"
      color= "#c28f3e">
      Thank you for shopping with us! 
      </Text>
      <Center   mr="80px"  >
        
   <Image src="https://media.tenor.com/nu9XqB4pQGsAAAAi/line-sticker-thank-you-sticker.gif"></Image>
   </Center>
   
   
          <Box
            m="50px"
            onClick={() => {
            
            Navigate("/");
          }} >
    <Button  
          
            bg="#ebe4d1"  
            pt={"10px"}
            pl={"20px"}
            fontSize={"20px"}
            fontWeight= "600"
            color="#9a7352"
            href=""
            _hover={{
              textDecoration: "none",
              color: "#c28f3e",
            }}   
           
    > <Text mt="-2" >BACK TO HOME PAGE </Text>
        </Button>
       </Box>
      
      
    </Box>
</Box>



  );
}