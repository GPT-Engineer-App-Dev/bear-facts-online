import { Container, Text, VStack, Heading, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Bear World</Heading>
        <Image src="/images/bear.jpg" alt="Bear" boxSize="300px" objectFit="cover" borderRadius="full" />
        <Box textAlign="center">
          <Text fontSize="lg">Discover the fascinating world of bears. Learn about their habitats, behaviors, and the different species that roam our planet.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;