import {
	Box,
	TableContainer,
	Th,
	Tr,
	Table,
	Td,
	Thead,
	Tbody,
	Button,
	useDisclosure,
	Alert,
	Stack,
	Spinner,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Wrap,
	Text,
	Flex,
	useToast,
  } from "@chakra-ui/react";
  import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
  import { useEffect, useState, useRef } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
	getAllOrders,
	deleteOrder,
	resetErrorAndRemoval,
	setDelivered,
  } from "../redux/actions/adminActions";
  import ConfirmRemovalAlert from "./ConfirmRemovalAlert";
  import { TbTruckDelivery } from "react-icons/tb";
  
  const OrdersTab = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const [orderToDelete, setOrderToDelete] = useState("");
	const dispatch = useDispatch();
	const { error, loading, orders, deliveredFlag, orderRemoval } = useSelector(
	  (state) => state.admin
	);
	const toast = useToast();
  
	useEffect(() => {
	  dispatch(getAllOrders());
	  dispatch(resetErrorAndRemoval());
	  if (orderRemoval) {
		toast({
		  description: "Order has been removed.",
		  status: "success",
		  isClosable: true,
		});
	  }
  
	  if (deliveredFlag) {
		toast({
		  description: "Order has been set to delivered.",
		  status: "success",
		  isClosable: true,
		});
	  }
	}, [dispatch, toast, orderRemoval, deliveredFlag]);
  
	const openDeleteConfirmBox = (order) => {
	  setOrderToDelete(order);
	  onOpen();
	};
  
	const onSetToDelivered = (order) => {
	  dispatch(resetErrorAndRemoval());
	  dispatch(setDelivered(order._id));
	};
  
	return (
	  <Box>
		{error && (
		  <Alert status="error">
			<AlertIcon />
			<AlertTitle>Upps!</AlertTitle>
			<AlertDescription>{error}</AlertDescription>
		  </Alert>
		)}
		{loading ? (
		  <Wrap justify="center">
			<Stack direction="row" spacing="4">
			  <Spinner
				mt="20"
				thickness="2px"
				speed="0.65s"
				emptyColor="gray.200"
				color="cyan.500"
				size="xl"
			  />
			</Stack>
		  </Wrap>
		) : (
		  <Box>
			<TableContainer>
			  <Table variant="simple">
				<Thead>
				  <Tr>
					<Th>Date</Th>
					<Th>Nom</Th>
					<Th>Email</Th>
					<Th>Expédition</Th>
					<Th>Articles commandés</Th>
					<Th>Prix ​​de l'expédition</Th>
					<Th>Total</Th>
					<Th>Livré</Th>
				  </Tr>
				</Thead>
				<Tbody>
				  {orders &&
					orders.map((order) => (
					  <Tr key={order._id}>
						<Td>{new Date(order.createdAt).toDateString()}</Td>
						<Td>{order.username}</Td>
						<Td>{order.email}</Td>
						<Td>
						  <Text>
							<i>Adresse: </i> {order.shippingAddress.address}
						  </Text>
						  <Text>
							<i>City: </i> {order.shippingAddress.postalCode}{" "}
							{order.shippingAddress.city}
						  </Text>
						  <Text>
							<i>Pays: </i> {order.shippingAddress.country}
						  </Text>
						</Td>
						<Td>
						  {order.orderItems.map((item) => (
							<Text key={item._id}>
							  {item.qty} x {item.name}
							</Text>
						  ))}
						</Td>
						<Td>${order.shippingPrice}</Td>
						<Td>${order.totalPrice}</Td>
						<Td>
						  {order.isDelivered ? <CheckCircleIcon /> : "Pending"}
						</Td>
						<Td>
						  <Flex direction="column">
							<Button
							  variant="outline"
							  onClick={() => openDeleteConfirmBox(order)}
							>
							  <DeleteIcon mr="5px" />
							  Supprimer la commande
							</Button>
							{!order.isDelivered && (
							  <Button
								mt="4px"
								variant="outline"
								onClick={() => onSetToDelivered(order)}
							  >
								<TbTruckDelivery />
								<Text ml="5px">Livré</Text>
							  </Button>
							)}
						  </Flex>
						</Td>
					  </Tr>
					))}
				</Tbody>
			  </Table>
			</TableContainer>
			<ConfirmRemovalAlert
			  isOpen={isOpen}
			  onOpen={onOpen}
			  onClose={onClose}
			  cancelRef={cancelRef}
			  itemToDelete={orderToDelete}
			  deleteAction={deleteOrder}
			/>
		  </Box>
		)}
	  </Box>
	);
  };
  
  export default OrdersTab;
  