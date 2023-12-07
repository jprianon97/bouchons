"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  Image,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import logo from "../logo/logo.svg";

const LandingScreen = () => (
  <Flex
    w={"full"}
    h={"100vh"}
    backgroundImage={"images/landing-light.jpg"}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
        <Flex alignItems="center">
          <Image boxSize="20px" src={logo} alt="Logo" />
          <Text fontSize="2xl" fontWeight="extrabold" color={"white"}>
            DIM SUM SNACK
          </Text>
        </Flex>
        <Text
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          Production artisanale Ile de La Réunion. Recette et savoir-faire de
          plus de 35 ans
        </Text>
        <Stack direction={"row"}>
          <Button bg={"red.600"} color={"white"} _hover={{ bg: "red.400" }}>
            <Link
              as={ReactLink}
              to="/products"
              _hover={{ textDecoration: "none" }}
            >
              DÉCOUVRER MAINTENANT
            </Link>
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
);

export default LandingScreen;
