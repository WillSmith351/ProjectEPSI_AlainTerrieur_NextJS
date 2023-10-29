'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcBusinessman, FcAssistant, FcClock } from 'react-icons/fc'; // Importations des icônes


interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    )
}

export default function SimpleThreeColumns() {
    return (
        <Box p={20}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
                <Feature
                    icon={<Icon as={FcBusinessman} w={10} h={10} />}
                    title={"Conseils d'Experts"}
                    text={
                        'Notre entreprise se distingue par ses conseils d\'experts. Nos professionnels sont là pour vous guider à chaque étape de votre projet de construction ou de rénovation. Nous partageons nos connaissances pour vous aider à prendre des décisions éclairées.'
                    }
                />

                <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={'Accompagnement Personnalisé'}
                    text={
                        "Notre entreprise est déterminée à vous fournir un accompagnement personnalisé tout au long de votre projet. Nous nous engageons à vous offrir un suivi attentif et à répondre à tous vos besoins pour assurer la réussite de votre projet."
                    }
                />

                <Feature
                    icon={<Icon as={FcClock} w={10} h={10} />} // Icône de montre ou chrono
                    title={'Respect des Délais'}
                    text={
                        "Nous savons que le temps est précieux. Notre équipe garantit des délais d'exécution optimaux pour que vous puissiez profiter de votre espace rénové en un rien de temps."
                    }
                />



            </SimpleGrid>
        </Box>
    )
}