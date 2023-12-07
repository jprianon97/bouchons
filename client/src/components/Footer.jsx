import {
	Button,
	ButtonGroup,
	Container,
	Divider,
	IconButton,
	Input,
	Stack,
	Text,
	useColorModeValue as mode,
	Box,
	Flex,
	Image,
  } from "@chakra-ui/react";
  import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
  import logo from "../logo/logo.svg";
  
  const Footer = () => (
	<Box w="100%" bg={mode("gray.900", "gray.900")}>
	  <Container as="footer" maxW="7xl">
		<Stack
		  spacing="8"
		  direction={{ base: "column", md: "row" }}
		  justify="space-between"
		  py={{ base: "12", md: "16" }}
		>
		  <Stack spacing={{ base: "6", md: "8" }} align="start">
			<Flex alignItems="center">
			  <Image boxSize="20px" src={logo} alt="Logo" />
			  <Text fontSize="2xl" fontWeight="extrabold" color="white">
				Dim Sum Snack
			  </Text>
			</Flex>
			<Text color="white">Nou aime bouchons</Text>
		  </Stack>
		  <Stack
			direction={{ base: "column-reverse", md: "column", lg: "row" }}
			spacing={{ base: "12", md: "8" }}
		  >
			<Stack direction="row" spacing="8">
			  <Stack spacing="4" minW="36" flex="1">
				<Text fontSize="sm" fontWeight="semibold" color="white">
				  Products
				</Text>
				<Stack spacing="3" shouldWrapChildren>
				  <Button variant="link" color="white">
					Comment ça marche
				  </Button>
				  <Button variant="link" color="white">
					Nos prix
				  </Button>
				</Stack>
			  </Stack>
			  <Stack spacing="4" minW="36" flex="1">
				<Text fontSize="sm" fontWeight="semibold" color="white">
				  Legal
				</Text>
				<Stack spacing="3" shouldWrapChildren>
				  <Button variant="link" color="white">
					Privacy
				  </Button>
				  <Button variant="link" color="white">
					Terms
				  </Button>
				  <Button variant="link" color="white">
					License
				  </Button>
				</Stack>
			  </Stack>
			</Stack>
			<Stack spacing="4">
			  <Text fontSize="sm" fontWeight="semibold" color="white">
				Tenez vous à jour
			  </Text>
			  <Stack
				spacing="4"
				direction={{ base: "column", sm: "row" }}
				maxW={{ lg: "360px" }}
			  >
				<Input placeholder="Entrer votre email" type="email" required />
				<Button
				  variant="primary"
				  type="submit"
				  color="white"
				  flexShrink={0}
				>
				  S'abonner
				</Button>
			  </Stack>
			</Stack>
		  </Stack>
		</Stack>
		<Divider />
		<Stack
		  pt="8"
		  pb="12"
		  justify="space-between"
		  direction={{ base: "column-reverse", md: "row" }}
		  align="center"
		>
		  <Text fontSize="sm" color="white">
			&copy; {new Date().getFullYear()} Dim Sum Snack, Tous droits réservé.
		  </Text>
		  <ButtonGroup variant="ghost">
			<IconButton
			  color="white"
			  as="a"
			  href="#"
			  icon={<FaLinkedin fontSize="1.25rem" />}
			/>
			<IconButton
			  color="white"
			  as="a"
			  href="#"
			  icon={<FaGithub fontSize="1.25rem" />}
			/>
			<IconButton
			  color="white"
			  as="a"
			  href="#"
			  icon={<FaFacebook fontSize="1.25rem" />}
			/>
		  </ButtonGroup>
		</Stack>
	  </Container>
	</Box>
  );
  
  export default Footer;
  