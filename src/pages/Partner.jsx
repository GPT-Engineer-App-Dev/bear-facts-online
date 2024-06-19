import { Container, VStack, Heading, Box, Text, Link, Image, HStack } from "@chakra-ui/react";

const Partner = () => {
  const partners = [
    { name: "World Wildlife Fund", url: "https://www.worldwildlife.org/", logo: "/images/wwf.png" },
    { name: "National Geographic", url: "https://www.nationalgeographic.com/animals/", logo: "/images/national-geographic.png" },
    { name: "Bear Trust International", url: "https://beartrust.org/", logo: "/images/bear-trust.png" },
    { name: "Defenders of Wildlife", url: "https://defenders.org/", logo: "/images/defenders-of-wildlife.png" },
  ];

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Our Partners</Heading>
        <Box textAlign="center">
          <Text fontSize="lg">We are proud to be associated with the following organizations that are dedicated to the conservation and study of animals and bears:</Text>
        </Box>
        <VStack spacing={4} align="start">
          {partners.map((partner, index) => (
            <HStack key={index} spacing={4}>
              <Image src={partner.logo} alt={partner.name} boxSize="50px" objectFit="contain" />
              <Link href={partner.url} color="teal.500" isExternal>
                {partner.name}
              </Link>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Partner;