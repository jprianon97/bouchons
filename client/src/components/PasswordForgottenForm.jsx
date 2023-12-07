import { Text, Stack, Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResetEmail } from "../redux/actions/userActions";

const PasswordForgottenForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Box my="4">
        <Text as="b">Entrez votre adresse e-mail ci-dessous.</Text>
        <Text>
          Nous vous enverrons un e-mail avec un lien pour réinitialiser votre
          mot de passe.
        </Text>
      </Box>
      <Stack>
        <Input
          mb="4"
          type="text"
          name="email"
          placeholder="Votre adresse e-mail"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <Button
          colorScheme="yellow"
          size="lg"
          fontSize="md"
          onClick={() => dispatch(sendResetEmail(email))}
        >
          Envoyer un e-mail de réinitialisation
        </Button>
      </Stack>
    </>
  );
};

export default PasswordForgottenForm;
