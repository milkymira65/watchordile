import { Box, Button, Flex, Spacer,Text, Menu,Avatar,Image,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { useAuth } from  "../../contexts/authentication.js";

export function NewNavLandingLogin() {
  const Navigate = useNavigate()
  const { logout } = useAuth();

    return (  
        <Box>
    <Flex w="100%" h="55px" bg="#ebe4d1">
      <Flex w="20%" justify="space-between" align="center" ml="6%">
        <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
          WOD
        </Text>
         <Box   onClick={() => {
                  Navigate("/");
                }} >
           <Button  colorScheme='#ebe4d1' 
              pt={"10px"}
                pl={"20px"}
                fontSize={"18px"}
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
  <MenuButton  as={Button} colorScheme='#ebe4d1'  
                       pr={"40px"}
                       pl={"15px"}
                       pt="10px"
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
      <Button w="45%" h="45%" mt="15px" colorScheme="#2F2E2C" onClick={() => {
                  Navigate("/cart");
                }} > 
       <Image  src="picture/iconcart.png" />
        </Button>

        <Spacer />
        <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                mr='50px'
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList >
                <MenuItem 
                
                _hover={{
                  bg: "#ebe4d1",
                }}   
                onClick={() => {
                  Navigate("/profile");
                }}
                >My Profile</MenuItem>
                <MenuItem 
                
                _hover={{
                  bg: "#ebe4d1",
                }}   
                onClick={() => {
                  Navigate(" ");
                }} 
                >My favorite</MenuItem>
                <MenuItem 
                
                _hover={{
                  bg: "#ebe4d1",
                }}   
                onClick={() => {
                  logout();
                  Navigate("/login");
                }}
                >Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        
      </Flex>
    </Flex>
    </Box>
    )};