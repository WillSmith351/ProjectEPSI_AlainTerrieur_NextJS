'use client'

import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
}

const Testimonial = (props: Props) => {
    const { children } = props

    return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

const TestimonialHeading = (props: Props) => {
    const { children } = props

    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

const TestimonialText = (props: Props) => {
    const { children } = props

    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string
    name: string
    title: string
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

export default function WithSpeechBubbles() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Témoignages de Nos Clients</Heading>
                    <Text>Découvrez les retours de nos clients !</Text>

                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Rénovation Salle de Bain</TestimonialHeading>
                            <TestimonialText>
                                Je suis ravis de la rénovation de ma salle de bains réalisée par votre entreprise. Le résultat est  spectaculaire. Votre équipe a fait preuve de professionnalisme à chaque étape du projet, et je suis très satisfait de la qualité du travail. Merci pour cette incroyable transformation de ma salle de bains.
                            </TestimonialText>
                        </TestimonialContent>

                        <TestimonialAvatar
                            src={'https://this-person-does-not-exist.com/img/avatar-gen796aaebd69bdd0db0b4b3c0fdd738cba.jpg'}
                            name={'Jean Dupont'}
                            title={'Directeur Général chez Dupont Construction'}
                        />
                    </Testimonial>

                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Un Salon Rénové à la Perfection</TestimonialHeading>
                            <TestimonialText>
                                Votre entreprise a été une source de bons conseils en matière de design. Vos idées intuitives ont donné une toute nouvelle vie à mon salon. Le résultat final correspond parfaitement à mes attentes. Merci pour cette incroyable transformation.
                            </TestimonialText>
                        </TestimonialContent>

                        <TestimonialAvatar
                            src={'https://this-person-does-not-exist.com/img/avatar-genec3a02c019afc569abe5c98dc81b3ee6.jpg'}
                            name={'Marie Lefebvre'}
                            title={'Designer chez Lefebvre Décor'}
                        />
                    </Testimonial>
                    

                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Rénovation cuisine</TestimonialHeading>
                            <TestimonialText>
                                La rénovation de ma cuisine avec votre entreprise a été exceptionnelle. Votre professionnalisme et la qualité du travail ont dépassé mes attentes. Merci pour cette transformation incroyable.
                            </TestimonialText>
                        </TestimonialContent>


                        <TestimonialAvatar
                            src={'https://this-person-does-not-exist.com/img/avatar-gen5fe498c19eec256ac3817e414072706f.jpg'}
                            name={'Pierre Tremblay'}
                            title={'Propriétaire chez Tremblay Rénovation'}
                        />
                    </Testimonial>

                </Stack>
            </Container>
        </Box>
    )
}