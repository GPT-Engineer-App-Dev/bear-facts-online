import { Container, VStack, Heading, Box, Text, Link } from "@chakra-ui/react";

const Partner = () => {
  const partners = [
    { name: "World Wildlife Fund", url: "https://www.worldwildlife.org/" },
    { name: "National Geographic", url: "https://www.nationalgeographic.com/animals/" },
    { name: "Bear Trust International", url: "https://beartrust.org/" },
    { name: "Defenders of Wildlife", url: "https://defenders.org/" },
  ];

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Our Partners</Heading>
        <Box textAlign="center">
          <Text fontSize="lg">We are proud to be associated with the following organizations that are dedicated to the conservation and study of animals and bears:</Text>
        </Box>
        <VStack spacing={2} align="start">
          {partners.map((partner, index) => (
            <Box key={index}>
              <Link href={partner.url} color="teal.500" isExternal>
                {partner.name}
              </Link>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Partner;