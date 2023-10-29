'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'Rénovation de cuisine',
    text: 'Modernisation de votre cuisine pour une expérience de cuisine optimisée',
    price: '200€/m²',
  },
  {
    id: 2,
    title: 'Réaménagement de salle de bain',
    text: 'Transformez votre salle de bain en un espace de détente et de luxe',
    price: '180€/m²',
  },
  {
    id: 3,
    title: 'Aménagement de combles',
    text: 'Utilisation maximale de l\'espace disponible pour des espaces habitables confortables',
    price: '150€/m²',
  },
  {
    id: 4,
    title: 'Travaux de peinture intérieure',
    text: 'Redonnez vie à vos murs avec des peintures de qualité supérieure',
    price: '40€/m²',
  },
  {
    id: 5,
    title: 'Revêtement de sol',
    text: 'Installation de revêtements de sol durables et esthétiques pour un intérieur élégant',
    price: '60€/m²',
  },
  {
    id: 6,
    title: 'Travaux de plomberie',
    text: 'Services de plomberie complets pour garantir un système fonctionnel et efficace',
    price: '100€/m²',
  },
  {
    id: 7,
    title: 'Travaux de menuiserie',
    text: 'Conception et installation de meubles sur mesure pour une optimisation de l\'espace',
    price: '80€/m²',
  },
  {
    id: 8,
    title: 'Installation de systèmes de chauffage',
    text: 'Solutions de chauffage modernes pour un intérieur chaleureux et économe en énergie',
    price: '120€/m²',
  },
]

export default function GridListWithHeading() {
  return (
    <Box p={4} mb={20} mt={20}>
    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'}>Nos Services</Heading>
      <Text color={'gray.600'} fontSize={'xl'}>
        Découvrez nos services de rénovation intérieure pour transformer votre espace de vie.
      </Text>
    </Stack>


      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
                <Text color={'blue.500'}>{feature.price}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
