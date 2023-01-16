import { Box, Flex, Text , Spacer,Button,Image} from '@chakra-ui/react';
import React from 'react'



export function CartPage() {

    return ( 
  // Navbar ==================================================================================
  <Box as Bigbox>
      <Box> 
        <Box as ="nav" bg="bgsurface" boxShadow = "lg" w="100%" >
        <Flex justify = "flex-end">
            <Button  fontSize="15" variant="ghost" color="#AA8B56" >HOME</Button>
            <Button  fontSize="15" variant="ghost" color="#AA8B56">PRODUCTS</Button>
            <Button  fontSize="15" variant="ghost" color="#AA8B56">ACCESSORIES</Button>
            <Button  fontSize="15" variant="ghost" color="#AA8B56">LOG IN</Button>
            <Button  fontSize="15" variant="ghost" color="#AA8B56">   <Image boxSize="30px" src="https://img.icons8.com/dotty/512/favorite-cart.png" className="pic2" alt=""/>    </Button>
        </Flex>
    </Box>

 {/* กล่อง Cart============================================================================================ */}
    
         <Flex  justify='center' mt="10vh" >
        <Box border="1px" color="white" w = "70vw" h = "70vh" bg = "white"  position='relative'>
        <Text as ="b" color="Black" fontSize='36px' p='5'>Cart</Text>
        <Box border="1px" borderBottomColor="#DEDEDE" >
        <Flex minWidth='max-content' alignItems='center' >
  <Box ml={[-5,-2,2]}>
    <Box as='b' color="#AA8b56" fontSize={{base:'18px',sm:'10px', md:'12px', lg:'18px'}}>PRODUCT NAME</Box>
  </Box>
  <Spacer />
  <Flex bg="red">
    <Box mr={[2,8,20]}><Text as ="b" color="#AA8b56" fontSize={{base:'18px',sm:'10px', md:'12px', lg:'18px'}}>PRICE</Text></Box>
    <Box mr={[2,8,20]}><Text as ="b" color="#AA8b56" fontSize={{base:'18px',sm:'10px', md:'12px', lg:'18px'}} >QUANTITY</Text> </Box>
    <Box mr={[2,8,20]}><Text as ="b" color="#AA8b56" fontSize={{base:'18px',sm:'10px', md:'12px', lg:'18px'}}>TOTAL</Text> </Box>
 
  </Flex>
</Flex> 

        </Box >
        </Box>
        </Flex>
    

       {/* Footer============================================================================================= */}

       <Flex justifyContent="center" color= "#AA8B56" mr="100" ml={[50,100,300]} mt="300">
          <Text fontSize={{base:'15px',sm:'20px', md:'20px', lg:'px'}}>Copyright©2022 Watchodile.All Right Reserved.</Text>
          </Flex>
     
        </Box>
        </Box>

   


    )
}

