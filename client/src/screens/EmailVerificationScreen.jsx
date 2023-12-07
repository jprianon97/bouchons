import React, { useEffect } from 'react';
import { useParams, Link as ReactLink } from 'react-router-dom';
import { verifyEmail } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { AbsoluteCenter, Box, AlertIcon, AlertTitle, AlertDescription, Text, Spinner, Alert } from '@chakra-ui/react';

const EmailVerificationScreen = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, [token, dispatch]);

  return (
    <Box position="relative" minH="3xl">
      <AbsoluteCenter axis="both">
        {loading ? (
          <Box textAlign="center">
            <Text fontSize="3xl">Nous travaillons sur la vérification de votre email.</Text>
            <Spinner size="xl" />
          </Box>
        ) : error === null ? (
          <Alert
            bg="parent"
            status="success"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertIcon boxSize="16" size="xl" />
            <AlertTitle>Merci d'avoir vérifié votre email.</AlertTitle>
            <AlertDescription fontSize="xl">Vous pouvez fermer cette fenêtre maintenant.</AlertDescription>
          </Alert>
        ) : (
          <Alert
            bg="parent"
            status="error"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertIcon boxSize="16" size="xl" />
            <AlertTitle>Nous sommes désolés!</AlertTitle>
            <AlertDescription fontSize="xl">{error}</AlertDescription>
          </Alert>
        )}
      </AbsoluteCenter>
    </Box>
  );
};

export default EmailVerificationScreen;
