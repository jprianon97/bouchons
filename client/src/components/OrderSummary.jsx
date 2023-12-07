import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue as mode,
  } from "@chakra-ui/react";
  import { FaArrowRight } from "react-icons/fa";
  import { useSelector } from "react-redux";
  import { Link as ReactLink } from "react-router-dom";
  
  const OrderSummary = ({ checkoutSreen = false }) => {
	const { subtotal, shipping } = useSelector((state) => state.cart);
  
	return (
	  <Stack
		minWidth="300px"
		spacing="8"
		borderWidth="1px"
		borderColor={mode("cyan.500", "cyan.100")}
		rounded="lg"
		padding="8"
		w="full"
	  >
		<Heading size="md">Récapitulatif de la commande</Heading>
		<Stack spacing="6">
		  <Flex justify="space-between">
			<Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
			  Sous total
			</Text>
			<Text fontWeight="medium">{subtotal}€</Text>
		  </Flex>
		  <Flex justify="space-between">
			<Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
			  Livraison
			</Text>
			<Text fontWeight="medium">{shipping}€</Text>
		  </Flex>
		  <Flex justify="space-between">
			<Text fontSize="xl" fontWeight="extrabold">
			  Total
			</Text>
			<Text fontWeight="medium">
			  {subtotal <= 1000
				? Number.parseFloat(Number(subtotal) + Number(shipping)).toFixed(
					2
				  )
				: subtotal}
			  €
			</Text>
		  </Flex>
		</Stack>
		<Button
		  hidden={checkoutSreen}
		  as={ReactLink}
		  to="/checkout"
		  colorScheme="orange"
		  size="lg"
		  rightIcon={<FaArrowRight />}
		>
		  Vérifier
		</Button>
	  </Stack>
	);
  };
  
  export default OrderSummary;
  