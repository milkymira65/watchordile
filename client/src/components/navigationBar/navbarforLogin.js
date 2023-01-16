import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  EnvironmentProvider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication.js";

export function LoginNavigation(props) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { setCategories } = props;

  const handlerClick = (value) => {
    console.log(value);
  };
  return (
    <Box>
      <Flex
        bg={"#ebe4d1"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          pl="2%"
        >
          <Text
            className="logo"
            fontSize={"1.5rem"}
            color={"#D6BE96"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            // color={useColorModeValue("gray.800", "white")}
          >
            WOD
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={5} pt={2}>
            <DesktopNav onClick={handlerClick} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            w={"70%"}
            h={"30px"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            borderRadius={"3xl"}
            bg={"#D6BE96"}
            onClick={() => {
              // navigate("/login");
            }}
          >
            ADD TO CART
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem>My favorite</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClick={handlerClick} />
      </Collapse>
    </Box>
  );
}

///////
const DesktopNav = (props) => {
  const linkColor = useColorModeValue("#9a7352", "gray.200");
  const linkHoverColor = useColorModeValue("#c28f3e", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { onClick } = props;

  // value={navItem.value}
  // onClick={(event) => {handlerClick(event.target.value)}}
  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                pt={"28px"}
                pl={"15px"}
                fontSize={"18px"}
                fontWeight={500}
                color={linkColor}
                href={navItem.href}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                      onClick={onClick}
                      value={navItem.value}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, onClick, subLabel, value }) => {
  return (
    <Button
      // href={href}
      value={value}
      onClick={(event) => onClick(event.target.value)}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Button>
  );
};

const MobileNav = (props) => {
  const { onClick } = props;
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          onClick={onClick}
          value={navItem.value}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, value, onClick }) => {
  const { isOpen, onToggle } = useDisclosure();
  console.log("hi");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        // href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Button
                key={child.label}
                py={2}
                // href={child.href}
                value={value}
                onClick={() => onClick(value)}
              >
                {child.label}
              </Button>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "HOME",
    href: "#",
  },
  {
    label: "PRODUCTS",
    children: [
      {
        label: "New Product",
        subLabel: "New item sell 50% off",
        href: "/products/category/5",
        value: 5,
      },
      {
        label: "Product",
        subLabel: "All item sell 55% off",
        href: "/products",
      },
      {
        label: "Men",
        subLabel: "Find your favorite watch",
        href: "/products/category/1",
        value: 1,
      },
      {
        label: "Women",
        subLabel: "An exclusive watch for you",
        href: "/products/category/2",
        value: 2,
      },
      {
        label: "Kid",
        subLabel: "Creating imagination by fantacy watch",
        href: "/products/category/3",
        value: 3,
      },
      {
        label: "Accessories",
        subLabel: "Watch spasres and part discount 60%",
        href: "/products/category/4",
        value: 4,
      },
    ],
  },
];
