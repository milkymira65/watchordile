
import { Box, Button, Flex, Heading, Spacer,Text, Menu,Image,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  

  export function NewNavLanding() {
    const Navigate = useNavigate()

    return (
      <Box>
      <Flex position="relative" w={[500,'100%','100%']} h="55px" bg="#ebe4d1">
        <Flex w="25%" justify="space-between" align="center" ml={[1,10,20]}>
          <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
            WOD
          </Text>
           <Box   onClick={() => {
            
                  Navigate("/");
                }} >
          <Button 
          
                  bg="#ebe4d1"  
                  pt={"10px"}
                  pl={"20px"}
                  fontSize={[10,12,18]}
                  fontWeight={500}
                  color="#9a7352"
                  href=""
                  _hover={{
                    textDecoration: "none",
                    color: "#c28f3e",
                  }}   
                 
          >HOME
              </Button>
             </Box>
    
             <Menu>
    <MenuButton as={Button} colorScheme='#ebe4d1' 
                       mt="3%" 
                       pr={"40px"}
                       pl={"15px"}
                       fontSize={"18px"}
                       fontWeight={500}
                       color="#9a7352"
                      _hover={{
                       textDecoration: "none",
                       color: "#c28f3e",
                     }} >
    PRODUCTS
    </MenuButton>
    <MenuList>
    {/* <MenuItem 
                _hover={{
                  bg: "#ebe4d1",
                }}   
                onClick={() => {
                  Navigate(`/products?category=5`);
                }} >New Products
      </MenuItem> */}
    
        <MenuItem  
                  _hover={{
                  bg: "#ebe4d1",
                }}   
                  onClick={() => {
                  Navigate("/products");
                }} 
        >Products </MenuItem>
        <MenuItem  
                    _hover={{
                     bg: "#ebe4d1",
                        }}   
              onClick={() => {
                  Navigate("/products/category/1");
                }}    
        >Men</MenuItem>
        <MenuItem  
                  _hover={{
                bg: "#ebe4d1",
                }}   
               onClick={() => {
                  Navigate("/products/category/2");
                }} 
        >Women</MenuItem>
        <MenuItem  
                  _hover={{
                    bg: "#ebe4d1",
                  }}    
                  onClick={() => {
                  Navigate("/products/category/3");
                }} 
        >Kid</MenuItem> 
        <MenuItem   _hover={{
                  bg: "#ebe4d1",
                }}   
                   onClick={() => {
                  Navigate("/products/category/4");
                }} 
        >Accessories</MenuItem> 
  
    </MenuList>

   
  </Menu>
  
        </Flex>
        
        <Spacer />
  
        <Flex >

         <Button w="40px" h="40px" mt="2px" colorScheme="#2F2E2C" 
         onClick={() => {
                  Navigate("/cart");
                }} > 
       <Image position="absolute"  mr="250px" mt={[-5,0,3]}  src="picture/iconcart.png"  />
        </Button>

          <Flex >
          <Button
          position="absolute"
          mt="3"
          ml="-110px"
            h="30px"
            w="100px" 
            fontSize={[10,11,17]}
            borderRadius="3xl"
            bg="#D6BE96"
            color="#ffffff"
            _hover={{
            bg: "#d5b178",
              }}
              onClick={() => {
                Navigate("/login");
              }} 
              
          >
            LOG IN
          </Button>
          
          <Spacer />
          <Button
          position="relative"
          h="30px"
          w="100px"
            borderRadius="3xl"
            bg="#EBE4D1"
            border="2px"
            borderColor="#D6BE96"
            color="#9A7352"
            mt={[3]}
            mr={[10]}
            fontSize={[10,9,17]}
            _hover={{
                color: "#d5b178",
              }}

              onClick={() => {
                Navigate("/register");
              }} 
          >
            REGISTER
          </Button>
             </Flex>

          
        </Flex>
      </Flex>
      </Box>
    );
  }
  
  
  