import { Box, HStack, Image, Tag, Heading, Text, Button, Center, SimpleGrid } from '@chakra-ui/react';

function Recette() {
  return (
    <SimpleGrid p="10" spacing={10} minChildWidth="250px">
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="images/landing-light.jpg"
          fallbackSrc="https://via.placeholder.com/200"
          alt="Recette"
          borderRadius="xl"
          objectif="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {['recette', 'Wonton'].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          Sauce piment fermenté
        </Heading>
        <Text>
          Quae et scilicet fortunas mandatum exilium exilium quaedam ab scilicet igitur ab villam igitur mandatum
          occiduntur acti fractis nulla non in vicensimo fortunas acti fortunas actitata clades filius quarto fortunas
          multorum ad in exilium mandatum constaret scilicet constaret fortunas cum.
        </Text>
        <Center mt="6">
          <Button colorScheme="blue">En savoir plus</Button>
        </Center>
      </Box>
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="images/landing-light.jpg"
          fallbackSrc="https://via.placeholder.com/200"
          alt="Recette"
          borderRadius="xl"
          objectif="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {['recette', 'Wonton'].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          Soupe Wan-Tan (Wonton)
        </Heading>
        <Text>
          Quae et scilicet fortunas mandatum exilium exilium quaedam ab scilicet igitur ab villam igitur mandatum
          occiduntur acti fractis nulla non in vicensimo fortunas acti fortunas actitata clades filius quarto fortunas
          multorum ad in exilium mandatum constaret scilicet constaret fortunas cum.
        </Text>
        <Center mt="6">
          <Button colorScheme="blue">En savoir plus</Button>
        </Center>
      </Box>
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="images/landing-light.jpg"
          fallbackSrc="https://via.placeholder.com/200"
          alt="Recette"
          borderRadius="xl"
          objectif="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {['recette', 'Wonton'].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          Bouchon gratiné
        </Heading>
        <Text>
          Quae et scilicet fortunas mandatum exilium exilium quaedam ab scilicet igitur ab villam igitur mandatum
          occiduntur acti fractis nulla non in vicensimo fortunas acti fortunas actitata clades filius quarto fortunas
          multorum ad in exilium mandatum constaret scilicet constaret fortunas cum.
        </Text>
        <Center mt="6">
          <Button colorScheme="blue">En savoir plus</Button>
        </Center>
      </Box>
    </SimpleGrid>
  );
}

export default Recette;
