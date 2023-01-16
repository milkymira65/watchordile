// import {
//   Box,
//   Button,
//   Center,
//   Flex,
//   Image,
//   Wrap,
//   Link,
//   Text,
//   IconButton,
//   Spacer,
// } from "@chakra-ui/react";
// // import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
// import ProductList from "../components/productList";
// // import { LoginNavigation } from "../components/navigationBar/navbarBlackModeforLogin";
// // import { Navigation } from "../components/navigationBar/navbarBlackMode";
// import { useAuth } from "../contexts/authentication";
// import {useState} from "react"
// import {useParams} from "react-router-dom"

// import {NewNavBlack} from "../components/newnavbar/newnavbarproductlist"
// import {NewNavLoginBlack} from "../components/newnavbar/newnavbarproductlogin"

// export function ProductListingPage() {
//   const params =useParams();
//   const categoryId = params.id
//   // console.log(categoryId)
//   const [categories, setCategories] = useState([]);
//   const auth = useAuth();
//   const productPerPage = 20;

//   return (
//     <Box w="100%" h="100%" bg="#2F2E2C">
//       {auth.isAuthenticated ? <NewNavLoginBlack setCategories= {setCategories}/> : <NewNavBlack />}
//       <Center w="95%" h="100%" mr="3%" ml="8%" mt="5%">
//         <Wrap>
//           <ProductList  categoryId={categoryId}/>
//         </Wrap>
//       </Center>
//       <Center className="pagination" fontSize={"3rem"} pt="10%" pb="3%">
//         <Link href="#" color={"white"} pl="5%">
//           &laquo;
//         </Link>
//         <Link href="#" color={"white"} pl="5%">
//           1
//         </Link>
//         <Link href="#" color={"white"} pl="5%">
//           2
//         </Link>
//         <Link href="#" color={"white"} pl="5%">
//           3
//         </Link>
//         <Link href="#" color={"white"} pl="5%">
//           &raquo;
//         </Link>
//       </Center>

//       <Box>
//         <Flex direction="row" position="absolute" w="90%" m="5%" mt="20%">
//           <Flex direction="column" align="center" mt="10px">
//             <Text fontSize="20px" color="#ffffff">
//               CONTACT
//             </Text>

//             <Flex  direction="row" w="100%" h="5%">

//                <Link>
//                <Image src="picture/twiter2.png" alt="footer" w="48px" h="48px"  />
//               </Link>
//               <Link>
//                <Image src="picture/instagram8.png" alt="footer" w="50px" h="50px" mr="5px" />
//               </Link>
//               <Link>
//                <Image src="picture/facebook5.png" alt="footer" w="38px" h="38px" mt="7px" />
//               </Link>

//             </Flex>
//           </Flex>
//           <Spacer />
//           <Flex direction="column" align="center">
//             <Text fontSize="20px" color="#ffffff">
//               SECURE PAYMENT
//             </Text>
//             <Image
//               boxSize="100px"
//               w="250px"
//               h="45px"
//               src="picture/payment.png"
//               alt="payment"
//             />
//           </Flex>
//           <Spacer />
//           <Flex align="center" >
//             <Image src="picture/logo.png" alt="brand" />
//           </Flex>
//         </Flex>
//         <Box align="center">
//           <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
//         </Box>
//       </Box>
//     </Box>
//   );
// }
//การโชวทั้งหน้าหน้าตาทั้งหมดมาประกอบรวมกันมีนาฟบาร กราทโปรดัก ฟูทเตอร มาใช้

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Wrap,
  WrapItem,
  Link,
  Text,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
// import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import ProductList from "../components/productList";
import { useAuth } from "../contexts/authentication";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { NewNavBlack } from "../components/newnavbar/newnavbarproductlist";
import { NewNavLoginBlack } from "../components/newnavbar/newnavbarproductlogin";
import { Grid, GridItem } from "@chakra-ui/react";

export function ProductListingPage() {
  const params = useParams();
  const categoryId = params.id;
  const [categories, setCategories] = useState([]);
  const auth = useAuth();
  const productPerPage = 20;

  return (
    <Box w="100%" h="100%" bg="#2F2E2C">
      {auth.isAuthenticated ? (
        <NewNavLoginBlack setCategories={setCategories} />
      ) : (
        <NewNavBlack />
      )}

      <Wrap mt="5%" m="3%">
        <Flex direction="row" justify="Center" w="70%" h="100%">
          <ProductList categoryId={categoryId} />
        </Flex>
      </Wrap>

      {/* footer */}
      <Box>
        <Flex direction="row" position="absolute" w="90%" m="5%" mt="20%">
          <Flex direction="column" align="center" mt="10px">
            <Text fontSize="20px" color="#ffffff">
              CONTACT
            </Text>

            <Flex direction="row" w="100%" h="5%">
              <Link>
                <Image
                  src="picture/twiter2.png"
                  alt="footer"
                  w="48px"
                  h="48px"
                />
              </Link>
              <Link>
                <Image
                  src="picture/instagram8.png"
                  alt="footer"
                  w="50px"
                  h="50px"
                  mr="5px"
                />
              </Link>
              <Link>
                <Image
                  src="picture/facebook5.png"
                  alt="footer"
                  w="38px"
                  h="38px"
                  mt="7px"
                />
              </Link>
            </Flex>
          </Flex>
          <Spacer />
          <Flex direction="column" align="center">
            <Text fontSize="20px" color="#ffffff">
              SECURE PAYMENT
            </Text>
            <Image
              boxSize="100px"
              w="250px"
              h="45px"
              src="picture/payment.png"
              alt="payment"
            />
          </Flex>
          <Spacer />
          <Flex align="center">
            <Image src="picture/logo.png" alt="brand" />
          </Flex>
        </Flex>
        <Box align="center">
          <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
        </Box>
      </Box>
    </Box>
  );
}
