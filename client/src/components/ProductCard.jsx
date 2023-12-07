import {
	Box,
	Image,
	Text,
	Badge,
	Flex,
	Button,
	IconButton,
	Skeleton,
	useToast,
	Tooltip,
	Link,
  } from "@chakra-ui/react";
  import { BiExpand } from "react-icons/bi";
  import React, { useState } from "react";
  import {
	addToFavorites,
	removeFromFavorites,
  } from "../redux/actions/productActions";
  import { useSelector, useDispatch } from "react-redux";
  import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
  import { Link as ReactLink } from "react-router-dom";
  import { addCartItem } from "../redux/actions/cartActions";
  import { useEffect } from "react";
  import { TbShoppingCartPlus } from "react-icons/tb";
  
  const ProductCard = ({ product, loading }) => {
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.product);
	const [isShown, setIsShown] = useState(false);
	const { cartItems } = useSelector((state) => state.cart);
	const toast = useToast();
	const [cartPlusDisabled, setCartPlusDisabled] = useState(false);
  
	useEffect(() => {
	  const item = cartItems.find((cartItem) => cartItem.id === product._id);
	  if (item && item.qty === product.stock) {
		setCartPlusDisabled(true);
	  }
	}, [product, cartItems]);
  
	const addItem = (id) => {
	  if (cartItems.some((cartItem) => cartItem.id === id)) {
		const item = cartItems.find((cartItem) => cartItem.id === id);
		dispatch(addCartItem(id, item.qty + 1));
	  } else {
		dispatch(addCartItem(id, 1));
	  }
	  toast({
		description: "L'article a été ajouté.",
		status: "success",
		isClosable: true,
	  });
	};
  
	return (
	  <Skeleton isLoaded={!loading}>
		<Box
		  _hover={{ transform: "scale(1.1)", transitionDuration: "0.5s" }}
		  borderWidth="1px"
		  overflow="hidden"
		  p="4"
		  shadow="md"
		>
		  <Image
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			src={product.images[isShown && product.images.length === 2 ? 1 : 0]}
			fallbackSrc="https://via.placeholder.com/150"
			alt={product.name}
			height="200px"
		  />
		  {product.stock < 5 ? (
			<Badge colorScheme="yellow">il ne reste que {product.stock}</Badge>
		  ) : product.stock < 1 ? (
			<Badge colorScheme="red">En rupture</Badge>
		  ) : (
			<Badge colorScheme="green">En Stock</Badge>
		  )}
		  {product.productIsNew && (
			<Badge ml="2" colorScheme="purple">
			  nouveau
			</Badge>
		  )}
		  <Text noOfLines={1} fontSize="xl" fontWeight="semibold" mt="1">
			{product.name}
		  </Text>
		  <Badge colorScheme="red">{product.category}</Badge>
		  <Text noOfLines={1} fontSize="md" color="gray.600">
			{product.subtitle}
		  </Text>
		  <Flex justify="space-between" mt="4">
			<Text fontSize="xl" fontWeight="semibold" color="black">
			  {product.price}€
			</Text>
		  </Flex>
		  <Flex justify="space-between" mt="4">
			<Button colorScheme="red" size="sm">
			  <Link
				as={ReactLink}
				to={`/product/${product._id}`}
				_hover={{ textDecoration: "none" }}
			  >
				DECOUVREZ
			  </Link>
			</Button>
			<Tooltip
			  isDisabled={!cartPlusDisabled}
			  hasArrow
			  label={
				!cartPlusDisabled
				  ? "Vous avez atteint la quantité maximale du produit. "
				  : product.stock <= 0
				  ? "En rupture de stock"
				  : ""
			  }
			>
			  <IconButton
				isDisabled={product.stock <= 0 || cartPlusDisabled}
				onClick={() => addItem(product._id)}
				icon={<TbShoppingCartPlus size="20" />}
				colorScheme="red"
				size="sm"
			  />
			</Tooltip>
		  </Flex>
		</Box>
	  </Skeleton>
	);
  };
  
  export default ProductCard;
  