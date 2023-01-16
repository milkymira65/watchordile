
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
  import { CartContext } from "../../App";
  import { useContext } from "react";
import { Time } from "../time";


  export function  NewNavProductDetail() {
    const Navigate = useNavigate()
    const contextValue = useContext(CartContext);
    const {
        mycart,
        setmyCart,
        cartItem,
        setTotalPrice,
        totalPrice,
        totalQuantity,
        quantity,
        handleAddCounter,
        handleMinusCounter,
        addProductToCart,
      } = useContext(CartContext);
    

    return (
      <Box>
      <Flex w={[500,'120%','100%']}  h="55px" bg="#ebe4d1">
        <Flex w="18%" justify="space-between" align="center" ml="5%">
          <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
            WOD
          </Text>
           <Box   onClick={() => {
            
                  Navigate("/");
                }} >
          <Button  
                  bg="#ebe4d1"  
                  pt={"10px"}
                  pl={"30px"}
                  fontSize={"18px"}
                  fontWeight={500}
                  color="#9a7352"
                  href=""
                  _hover={{
                    textDecoration: "none",
                    color: "#c28f3e",
                    bg:"#ebe4d1"
                  }}   
                 
          >HOME
              </Button>
             </Box>
    
             <Menu>
    <MenuButton as={Button} colorScheme='#ebe4d1'  
                    pt={"10px"}
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
  
        <Flex w="30%" mr="2%">
         <Button w="50%" h="50%" mt="10px" colorScheme="#2F2E2C" 
         onClick={() => {
                  Navigate("/cart");
                }} > 
                <Box mt="3">
       <Box ml={[-90,-84,2]}>
       <Time/>
       </Box>
       </Box>
        </Button>

          <Button
            h="60%"
            w="30%"
            borderRadius="3xl"
            bg="#D6BE96"
            color="#ffffff"
            mr="2%"
            mt={[3]}
            fontSize="0.9rem"
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
            h="60%"
            w="30%"
            borderRadius="3xl"
            bg="#EBE4D1"
            border="2px"
            borderColor="#D6BE96"
            color="#9A7352"
            mt={[3]}
            fontSize="0.9rem"
            _hover={{
                color: "#d5b178",
              }}

              onClick={() => {
                Navigate("/register");
              }} 
          >
            REGISTER
          </Button>
          <Flex ml="5px">
          
         </Flex>
          
        </Flex>
      </Flex>
      </Box>
    );
  }
  
  
  