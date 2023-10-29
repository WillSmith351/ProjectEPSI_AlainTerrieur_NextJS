import {
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const classicOptions = [
  { id: 1, desc: 'Évaluation approfondie des besoins.' },
  { id: 2, desc: 'Calendrier clair des travaux.' },
  { id: 3, desc: 'Recommandations de matériaux de qualité.' },
];

const plusOptions = [
  { id: 1, desc: 'Solutions innovantes pour maximiser l\'espace intérieur.' },
  { id: 2, desc: 'Assistance pour l\'achat de matériaux de haute qualité à prix avantageux.' },
  { id: 3, desc: 'Coordination avec des architectes d\'intérieur renommés.' },
];

const proOptions = [
  { id: 1, desc: 'Utilisation de technologies intelligentes pour une maison connectée.' },
  { id: 2, desc: 'Personnalisation d\'intérieurs de luxe avec des meubles sur mesure.' },
  { id: 3, desc: 'Service de suivi à long terme pour l\'entretien et la durabilité des travaux.' },
];

interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}

const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const textColor = useColorModeValue('purple.400', '#55BBFF');
  const priceColor = useColorModeValue('black', '#55BBFF');
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'} color={priceColor}>
        {typePlan}
      </Heading>
    </Stack>
  );
};

const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              Les services adaptés pour <Text color="#55BBFF">Vos Projets de Rénovation</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
              Découvrez nos options de services supplémentaires pour vos projets de rénovation. 
              Nous proposons des conseils personnalisés, des designs intérieurs sur mesure et un suivi de projet dédié pour créer une ambiance unique dans votre espace de vie.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Travaux Classique'} typePlan="Gratuit" options={classicOptions} />
        <Divider />
        <PackageTier title={'Travaux Plus'} checked={true} typePlan="1000.00 €" options={plusOptions} />
        <Divider />
        <PackageTier title={'Travaux Pro'} typePlan="5000.00 €" options={proOptions} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
