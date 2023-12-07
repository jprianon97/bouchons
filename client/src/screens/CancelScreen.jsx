import { Center, Text, Box, Button } from "@chakra-ui/react";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link as ReactLink } from "react-router-dom";

const CancelScreen = () => {
  return (
    <Center height="100vh" flexDirection="column">
      <Text fontSize={{ base: "md", md: "xl", lg: "4xl" }}>
        You have canceled the payment process.
      </Text>
      <Box m="2">
        <BsBoxSeamFill size="50px" mt="2" />
      </Box>

      <Text>Nous avons sauvegardé votre panier, juste au cas où.</Text>
      <Button as={ReactLink} to="/cart" mt="2">
        Accédez à votre panier
      </Button>
    </Center>
  );
};

export default CancelScreen;
