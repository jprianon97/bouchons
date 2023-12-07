import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Radio,
	RadioGroup,
	Spacer,
	Stack,
	Text,
	VStack,
  } from "@chakra-ui/react";
  import { Formik } from "formik";
  import { useDispatch, useSelector } from "react-redux";
  import * as Yup from "yup";
  import { setShipping } from "../redux/actions/cartActions";
  import { setAddress, setPayment } from "../redux/actions/orderActions";
  import TextField from "./TextField";
  import { Link as ReactLink } from "react-router-dom";
  
  const ShippingInformation = () => {
	const { shipping } = useSelector((state) => state.cart);
	const { shippingAddress } = useSelector((state) => state.order);
  
	const dispatch = useDispatch();
  
	const onSubmit = async (values) => {
	  dispatch(setAddress(values));
	  dispatch(setPayment());
	};
  
	return (
	  <Formik
		initialValues={{
		  address: shippingAddress ? shippingAddress.address : "",
		  postalCode: shippingAddress ? shippingAddress.postalCode : "",
		  city: shippingAddress ? shippingAddress.city : "",
		  country: shippingAddress ? shippingAddress.country : "",
		}}
		validationSchema={Yup.object({
		  address: Yup.string()
			.required("We need an address.")
			.min(2, "This address is too short."),
		  postalCode: Yup.string()
			.required("We need a postal code.")
			.min(2, "This postal code is too short."),
		  city: Yup.string()
			.required("We need a city.")
			.min(2, "This city is too short."),
		  country: Yup.string()
			.required("We need a country.")
			.min(2, "This country is too short."),
		})}
		onSubmit={onSubmit}
	  >
		{(formik) => (
		  <>
			<VStack as="form">
			  <FormControl>
				<TextField name="adresse" placeholder="Adresse" label="Adresse" />
				<Flex>
				  <Box flex="1" mr="10">
					<TextField
					  name="postalCode"
					  placeholder="Code Postal"
					  label="Postal Code"
					  type="number"
					/>
				  </Box>
				  <Box flex="2">
					<TextField name="ville" placeholder="City" label="City" />
				  </Box>
				</Flex>
				<TextField name="country" placeholder="Ville" label="Country" />
			  </FormControl>
			  <Box w="100%" pr="5">
				<Heading fontSize="2xl" fontWeight="extrabold" mb="10">
				  Mode de livraison
				</Heading>
				<RadioGroup
				  onChange={(e) => {
					dispatch(
					  setShipping(
						e === "express"
						  ? Number(4.0).toFixed(2)
						  : Number(0.0).toFixed(2)
					  )
					);
				  }}
				  defaultValue={shipping === 4.99 ? "withoutExpress" : "express"}
				>
				  <Stack
					direction={{ base: "column", lg: "row" }}
					align={{ lg: "flex-start" }}
				  >
					<Stack pr="10" spacing={{ base: "8", md: "10" }} flex="1.5">
					  <Box>
						<Radio value="express">
						  <Text fontWeight="bold">Livraison 4.00</Text>
						  <Text>Livraison Nord Est</Text>
						</Radio>
					  </Box>
					  <Stack spacing="6">Express</Stack>
					</Stack>
					<Radio value="withoutExpress">
					  <Box>
						<Text fontWeight="bold">Clik & collect 0.00</Text>
						<Text>Récuperer sur place</Text>
					  </Box>
					</Radio>
				  </Stack>
				</RadioGroup>
			  </Box>
			</VStack>
			<Flex
			  alignItems="center"
			  gap="2"
			  direction={{ base: "column", lg: "row" }}
			>
			  <Button
				variant="outline"
				colorScheme="cyan"
				w="100%"
				as={ReactLink}
				to="/cart"
			  >
				Retour au panier
			  </Button>
			  <Button
				variant="outline"
				colorScheme="cyan"
				w="100%"
				as={ReactLink}
				to="/payment"
				onClick={formik.handleSubmit}
			  >
				Continuer le paiement
			  </Button>
			</Flex>
		  </>
		)}
	  </Formik>
	);
  };
  
  export default ShippingInformation;
  