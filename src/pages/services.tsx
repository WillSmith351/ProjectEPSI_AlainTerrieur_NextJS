import Head from 'next/head';
import WithSubnavigation from '@/components/navbar/index';
import WithBackgroundImage from '@/components/hero';
import StatsGridWithImage from '@/components/features';
import GridListWithHeading from '@/components/statistics';
import SmallCentered from '@/components/footer';
import ThreeTierPricingHorizontal from '@/components/pricing';
import { useState } from 'react';
import { Box, Input, Checkbox, Heading, Text} from '@chakra-ui/react';

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [simulationPrice, setSimulationPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('Rénovation de cuisine');
  const [pricePerSquareMeter, setPricePerSquareMeter] = useState(200);
  const [selectedType, setSelectedType] = useState('classique');
  const [additionalPrice, setAdditionalPrice] = useState(0);
  
  const handleCheckboxChange = (event: any) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case 'Rénovation de cuisine':
        setPricePerSquareMeter(200);
        break;
      case 'Réaménagement de salle de bain':
        setPricePerSquareMeter(180);
        break;
      case 'Aménagement de combles':
        setPricePerSquareMeter(150);
        break;
      case 'Travaux de peinture intérieure':
        setPricePerSquareMeter(40);
        break;
      case 'Travaux de plomberie':
        setPricePerSquareMeter(100);
        break;
      case 'Travaux de menuiserie':
        setPricePerSquareMeter(80);
        break;
      case 'Installation de systèmes de chauffages':
        setPricePerSquareMeter(120);
        break;
      case 'Revêtement de sol':
        setPricePerSquareMeter(60);
        break;
    }
  };

  const handleCheckboxTypeChange = (event: any) => {
    setSelectedType(event.target.value);
    switch (event.target.value) {
      case 'classique':
        setAdditionalPrice(0);
        break;
      case 'plus':
        setAdditionalPrice(1000);
        break;
      case 'pro':
        setAdditionalPrice(5000);
        break;
    }
  };

  const simulatePrice = (area: any) => {
    const price = area * pricePerSquareMeter + additionalPrice;
    setSimulationPrice(
      `Le prix estimé pour ${area} m² avec l'option ${selectedOption} et le type de prestation ${selectedType} est de ${price} €.`
    );
  };


  const scrollToPricing = () => {
    setShowPricing(true);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <main>
        <WithSubnavigation />
        <WithBackgroundImage scrollToPricing={scrollToPricing} />
        <StatsGridWithImage />
        <GridListWithHeading />
        <ThreeTierPricingHorizontal />
        <Box p={6}>
          <Heading textAlign="center" mb={4}>Faites votre <Text color="#55BBFF" display="inline">simulation</Text> du prix de vos travaux</Heading>

            <Heading as='h4' size='md' mb={4}>Choissisez le type de travaux</Heading>
            
            <Box display="flex" flexDirection="column">
              <Checkbox
                isChecked={selectedOption === 'Rénovation de cuisine'}
                onChange={handleCheckboxChange}
                value="Rénovation de cuisine"
              >
                Rénovation de cuisine
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Réaménagement de salle de bain'}
                onChange={handleCheckboxChange}
                value="Réaménagement de salle de bain"
              >
                Réaménagement de salle de bain
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Aménagement de combles'}
                onChange={handleCheckboxChange}
                value="Aménagement de combles"
              >
                Aménagement de combles
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Travaux de peinture intérieure'}
                onChange={handleCheckboxChange}
                value="Travaux de peinture intérieure"
              >
                Travaux de peinture intérieure
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Revêtement de sol'}
                onChange={handleCheckboxChange}
                value="Revêtement de sol"
              >
                Revêtement de sol
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Travaux de plomberie'}
                onChange={handleCheckboxChange}
                value="Travaux de plomberie"
              >
                Travaux de plomberie
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Travaux de menuiserie'}
                onChange={handleCheckboxChange}
                value="Travaux de menuiserie"
              >
                Travaux de menuiserie
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === 'Installation de systèmes de chauffages'}
                onChange={handleCheckboxChange}
                value="Installation de systèmes de chauffages"
              >
                Installation de systèmes de chauffages
              </Checkbox>
            </Box>

            <Box mt={4}>
              <Heading as='h4' size='md' mb={4}>Choissisez le type de prestation</Heading>
              <Box display="flex" flexDirection="column">
                <Checkbox
                  isChecked={selectedType === 'classique'}
                  onChange={handleCheckboxTypeChange}
                  value="classique"
                >
                  Classique
                </Checkbox>
                <Checkbox
                  isChecked={selectedType === 'plus'}
                  onChange={handleCheckboxTypeChange}
                  value="plus"
                >
                  Plus
                </Checkbox>
                <Checkbox
                  isChecked={selectedType === 'pro'}
                  onChange={handleCheckboxTypeChange}
                  value="pro"
                >
                  Pro
                </Checkbox>
              </Box>
              <Input
                placeholder="Entrez la surface en m²"
                onChange={(e) => simulatePrice(e.target.value)}
                mt={4}
              />

              {simulationPrice && <Box mt={4}>{simulationPrice}</Box>}
            </Box>

            <Box p={6} display="flex" flexDirection="column" alignItems="center"></Box>

        </Box>

        <SmallCentered />
      </main>
    </>
  );
}

