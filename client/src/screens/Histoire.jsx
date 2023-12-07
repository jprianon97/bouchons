import { Box, HStack, Image, Tag, Heading, Text, Button, Center } from '@chakra-ui/react';

function Recette() {
  return (
    <Center bg="gray.100" h="100vh">
      <Box maxW="620px" bg="white" p="6">
        <Image
          src="images/landing-light.jpg"
          fallbackSrc="https://via.placeholder.com/200"
          alt="Recette"
          borderRadius="xl"
          objectif="cover"
          mx="auto"
        />

        <Heading my="4" size="lg">
          Depuis 1986
        </Heading>
        <Text>
          Quae et scilicet fortunas mandatum exilium exilium quaedam ab scilicet igitur ab villam igitur mandatum
          occiduntur acti fractis nulla non in vicensimo fortunas acti fortunas actitata clades filius quarto fortunas
          multorum ad in exilium mandatum constaret scilicet constaret fortunas cum.
        </Text>
        <Center mt="6"></Center>
      </Box>
    </Center>
  );
}

export default Recette;
