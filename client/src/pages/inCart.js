//หน้ารายละเอียดของสินค้า
import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PayMentCard } from "../components/paymentcard";
import { NewNavCartLogin } from "../components/newnavbar/newnavcartlogin";
import { NewNavCart } from "../components/newnavbar/newnavcart";
import { useAuth } from "../contexts/authentication";
import { useProduct } from "../contexts/productContext";

export function CART() {
  const Navigate = useNavigate();
  const auth = useAuth();
  const contextValue = useContext(CartContext);
  const { deleteCartItem, getTotalPrice } = useProduct();
  const { setTotalPrice, setmyCart, mycart } = useContext(CartContext);

  const handleAddCounter = (index) => {
    let itemIndex = contextValue.mycart[index];
    const plusQuantitty = itemIndex.quantity + 1;
    itemIndex.quantity = plusQuantitty;
    console.log(itemIndex);
    setmyCart([...mycart]);
  };

  const handleMinusCounter = (index) => {
    let itemIndex = contextValue.mycart[index];
    const minusQuantitty = itemIndex.quantity - 1;
    itemIndex.quantity = minusQuantitty;
    if (itemIndex.quantity < 1) {
      itemIndex.quantity = 1;
    }
    console.log(itemIndex);
    setmyCart([...mycart]);
  };

  let handleRemove = () => {
    const sum = contextValue.mycart.filter((value) => value.id !== value[1].id);
    contextValue.setmyCart(sum);
  };

  return (
    // Navbar ==================================================================================

    <Box as="Big-Box">
      <Box w="100%">
        {auth.isAuthenticated ? <NewNavCartLogin /> : <NewNavCart />}
      </Box>
      <Flex w="60%" h="40%" direction="column">
        <Box position="relative" mt="20" ml={[80, 100, 180]} mb="200px">
          <Flex>
            <Text fontSize="40px" as="b">
              {" "}
              CART
            </Text>
          </Flex>
          <Text fontSize={[20, 25, 30]} as="b">
            Product Name
          </Text>
        </Box>
        <Box
          as="b"
          fontSize="30px"
          position="absolute"
          // mt={[-7, -10]}
          ml={[200, 600, 800]}
          mt="130px"
        >
          Price
        </Box>
        <Box
          mr="20px"
          as="b"
          fontSize={[20, 25, 30]}
          position="absolute"
          ml={[300, 800, 990]}
          // mt={[-7, -10]}
          mt="130px"
        >
          Quantity
        </Box>
        <Box
          as="b"
          fontSize={[20, 25, 30]}
          position="absolute"
          ml={[300, 1020, 1220]}
          // mt={[-7, -10]}
          mt="130px"
        >
          Total
        </Box>

        {contextValue.mycart.map((value, index) => {
          return (
            // กล่อง บรรจุ สินค้า ที่ add มา =======================================================================================
            <Box>
              <Flex ml={[80, 0, 180]}>
                <Box
                  position="relative"
                  h="40"
                  border="2px"
                  borderTopColor="white"
                  borderRightColor="white"
                  borderLeftColor="white"
                  borderBottomColor="white"
                >
                  <Box ml="-5" position="absolute" color="#DEDEDE">
                    ___________________________________________________________________________________________________________________________________________________________________________________________________
                  </Box>
                </Box>

                <Box
                  _hover={{
                    width: "300px",
                    height: "150px",
                    left: "10",
                    position: "relative",
                  }}
                  borderRadius="20px"
                  position="absolute"
                  boxShadow="2xl"
                  h={[50, 100, 120]}
                  w={[50, 100, 200]}
                  mt={[-130]}
                  ml={[-12, 5, -5]}
                >
                  <Image
                    borderRadius="20px"
                    boxSize="full"
                    src={value.image}
                    className="pic1"
                    alt="product"
                  />
                </Box>
                <Box
                  position="absolute"
                  ml={[80, 125, 250]}
                  mt={[-90]}
                  as="b"
                  fontSize="25px"
                >
                  {value.product_name}
                </Box>
                <Button
                  flex
                  position="absolute"
                  size="xs"
                  bg="white"
                  ml="1150"
                  mt="-92"
                  _hover={{ boxSize: "30", size: "md" }}
                  color="tomato"
                  onClick={() => deleteCartItem(value.product_id)}
                >
                  <Text fontSize="20">
                    {" "}
                    <Image
                      mt="-1"
                      boxSize="20px"
                      src="picture/Bin.png"
                      className="bin"
                      alt="bin"
                    />
                  </Text>{" "}
                </Button>

                <Box position="absolute" ml={[20, 610, 630]} mt={[-90]} as="b">
                  {value.price}
                </Box>
                <Box position="absolute" ml={[20, 885, 810]} mt={[-90]} as="b">
                  <Button
                    mr={[1, 2, 2]}
                    ml={[1, -20, 2]}
                    _hover={{ bg: "#ebe4d1" }}
                    onClick={() => {
                      handleMinusCounter(index);
                    }}
                    bg="#DEDEDE"
                    size="xs"
                  >
                    -
                  </Button>
                  <Text as="b" fontSize="18px">
                    {value.quantity}
                  </Text>
                  <Button
                    ml={[1, 2, 2]}
                    _hover={{ bg: "#ebe4d1" }}
                    onClick={() => {
                      handleAddCounter(index);
                    }}
                    bg="#DEDEDE"
                    size="xs"
                  >
                    +
                  </Button>
                </Box>
                <Box
                  position="absolute"
                  ml={[20, 1020, 1050]}
                  mt={[-90]}
                  as="b"
                >
                  {value.price * value.quantity}
                </Box>
              </Flex>
            </Box>
          );
        })}

        {/* Footer============================================================================================= */}
        <Flex
          direction="column"
          width="35%"
          align="start"
          mt="2%"
          ml={[300, 550, 680]}
        ></Flex>
      </Flex>
      <Button
        position="absolute"
        _hover={{ bg: "white", fontSize: "20", color: "#C7BCA1" }}
        mt={[-100, -140, -160]}
        ml={[500, 1000, 1150]}
        mr="10px"
        bg="#C7BCA1"
        size="md"
        height="35px"
        width="170px"
        border="2px"
        borderColor="#C7BCA1"
        colorScheme="#ebe4d1"
        fontSize="18"
        variant="ghost"
        color="white"
        onClick={() => {
          contextValue.setmyCart(
            contextValue.mycart.filter((value) => value.id !== value.id)
          );
        }}
      >
        CLEAR YOUR CART
      </Button>
      {/* //-------------card-------------// */}
      <Box bg="white" ml={[800, 1000, 1000]} w="80" h="200">
        <Flex position="absolute">
          <Text fontSize="20px" fontWeight="bold" ml="20">
            Total:{" "}
            <Box ml="55" mt="-12" position="absolute" fontSize="40">
              {" "}
              {getTotalPrice}{" "}
            </Box>
          </Text>
        </Flex>

        <PayMentCard />
      </Box>
      {/* _______________________________________Toggle ________________________________________ */}
      <Flex
        justifyContent="center"
        color="#AA8B56"
        mr="100"
        ml={[50, 100, 300]}
        mt="300"
      >
        <Text fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "px" }}>
          Copyright©2022 Watchodile.All Right Reserved.
        </Text>
      </Flex>
      //{" "}
    </Box>
  );
}
