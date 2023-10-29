import { ReactNode } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function WithBackgroundImage({ scrollToPricing }: { scrollToPricing: () => void }) {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://blog.teralta-audemard.com/hubfs/1-%20BLOG/donner%20plus%20value%20maison%20btp.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Transformez votre espace de vie avec des rénovations de qualité supérieure
          </Text>
          <Text color={'white'} fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
            Chez notre entreprise de BTP, nous nous engageons à créer des intérieurs exceptionnels qui reflètent votre style et répondent à vos besoins. Que vous souhaitiez moderniser votre cuisine ou transformer votre salle de bain en un spa luxueux, nous sommes là pour concrétiser votre vision.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={scrollToPricing} // Ajoutez la fonction scrollToPricing au onClick
            >
              Voir nos services
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}