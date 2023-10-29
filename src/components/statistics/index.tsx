import { ReactNode } from 'react';
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Box bg={'white'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
      >
        <Flex bgGradient={'linear(to-r, white 10%, #55BBFF)'} w={'full'} h={'full'} />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'blue.500'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'blue.700'}
              >
                Alain Terrieur BTP
              </Text>
              <Heading color={'blue.500'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Rénovations d'intérieur de qualité
              </Heading>
              <Text fontSize={'xl'} color={'blue.500'}>
                Notre équipe expérimentée de professionnels du bâtiment est dédiée à transformer votre espace intérieur en fonction de vos besoins. Nous mettons l'accent sur la qualité, la durabilité et la satisfaction du client.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'blue.700'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'blue.500'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'blue.500'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '300+',
    content: (
      <>
        <StatsText>Clients satisfaits</StatsText> grâce à nos services de rénovation intérieure de haute qualité
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Assistance</StatsText> disponible pour répondre à vos questions à tout moment
      </>
    ),
  },
  {
    title: '15 ans',
    content: (
      <>
        <StatsText>D'expérience</StatsText> dans la réalisation de rénovations intérieures pour des particuliers
      </>
    ),
  },
  {
    title: '10K+',
    content: (
      <>
        <StatsText>Projets</StatsText> achevés avec succès, transformant des espaces de vie en espaces magnifiques et fonctionnels
      </>
    ),
  },
];
