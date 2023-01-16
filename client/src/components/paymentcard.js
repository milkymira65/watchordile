import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Image,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import CreditCard  from "./checkOutForm/creditCard";


export function PayMentCard() {
  // const ServerQuickActions = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */

    <Box w="100%" h="500px">


      <Flex justifyContent="center" mt={4}>
        
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              position="absolute"
              mt="10"
              ml="10"
              fontSize="25px"
              color={"white"}
              rightIcon={<ChevronDownIcon />}
              variant="solid"
              bg="#DBA39A"
              _hover={{bg:"white",fontSize:"20",color:"#DBA39A"}}
              w="fit-content"
            >
              Proceed To Check Out
            </Button>
          </PopoverTrigger>
          <PopoverContent
            // ml={[300, 550, 600]}
            w="1000px"
            _focus={{ boxShadown: "none" }}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontSize="2xl" w="970px" fontWeight="bold" m="20px">
              Payment Method
            </PopoverHeader>
            <PopoverBody w="1000px">
              <Tabs isLazy colorScheme="green">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xl"
                    fontWeight="bold"
                    w="80%"
                  >
                    Credit Card
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xl"
                    fontWeight="bold"
                    w="80%"
                  >
                    Internet Banking
                  </Tab>
                  <Tab
                    fontSize="xl"
                    _focus={{ boxShadow: "none" }}
                    fontWeight="bold"
                    w="80%"
                  >
                    Cash on Delivery (COD)
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box py={4} px={12}>
                        <HStack justifyContent="center">
                          <Image
                            w="200px"
                            h="200px"
                            src="picture/creditcard.png"
                            alt="caditcard"
                          ></Image>
                        </HStack>
                      </Box>
                      <VStack py={4} borderRadius={"2xl"}>
                        <List spacing={3} textAlign="start" px={12}>
                          <ListItem>
                            <Image
                              w="400px"
                              src="picture/payment2.png"
                              alt="payment2"
                            ></Image>
                          </ListItem>

                          <ListItem></ListItem>
                        </List>
                        <Box w="30%" pt={8}>
                          <Center>
                          <Button bg ="white" _hover={{bg:"white"}}>
                            <CreditCard />
                          </Button>
                          </Center>
                        </Box>
                      </VStack>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box py={4} px={12}>
                        <HStack justifyContent="center">
                          <Image
                            w="250px"
                            h="230px"
                            src="picture/bankmobile2.png"
                            alt="mobilebanking"
                          ></Image>
                        </HStack>
                      </Box>
                      <VStack>
                        <Flex justifyContent="center" direction="row">
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/ttb.png"
                            alt="ttbbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/tmb.png"
                            alt="tmbbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/tbank.png"
                            alt="tbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/scb.png"
                            alt="scbbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/ktb.png"
                            alt="ktbbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/kbank.png"
                            alt="kbank"
                          ></Image>
                        </Flex>
                        <Flex justifyContent="center" direction="row">
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/bay.png"
                            alt="baybank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/ibank.png"
                            alt="ibank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/hsbc.png"
                            alt="hsbcbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/gsb.png"
                            alt="gsbbank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/citi.png"
                            alt="citibank"
                          ></Image>
                          <Image
                            w="60px"
                            m="20px"
                            src="picture/bbl.png"
                            alt="bblbank"
                          ></Image>
                        </Flex>
                        <Box w="30%" pt={8}>
                          <Button
                            w="full"
                            color="#CFF5E7"
                            variant="outline"
                            bg="#432C7A"
                            _hover={{
                              bg: "#80489C",
                            }}
                          >
                            Mobilebanking Payments
                          </Button>
                        </Box>
                      </VStack>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box py={4} px={12}>
                        <HStack justifyContent="center">
                          <Image
                            w="300px"
                            h="300px"
                            src="picture/daliverry.png"
                            alt="cod-daliverry"
                          ></Image>
                        </HStack>
                      </Box>
                      <VStack>
                        {/* <Flex  justifyContent="center" direction="row" >
            
              </Flex> */}
                        <Box w="30%" pt={8}>
                          <Button
                            w="full"
                            color="#CFF5E7"
                            variant="outline"
                            bg="#285430"
                            _hover={{
                              bg: "#5F8D4E",
                            }}
                          >
                            Cash on Delivery
                          </Button>
                        </Box>
                      </VStack>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
}
