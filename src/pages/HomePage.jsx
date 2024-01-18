import {useEffect, useState} from 'react';
import {Container} from '../components/Container';
import {TheHeader} from '../components/TheHeader';
import {About} from '../components/About';
import {TheStartScreen} from '../components/TheStartScreen';
import {Slider} from '../components/Slider';
import {HelpSection} from '../components/HelpSection';
import {Donation} from '../components/Donation';
import {Footer} from '../components/Footer';

import {InfoComponyDefault} from '../mock';
import {pets} from '../mock/dataPets';

export const HomePage = () => {
  const [local, setLocal] = useState(InfoComponyDefault);

  useEffect(() => {
    setLocal(local);
  }, [local, setLocal]);

  return (
    <Container>
      <TheHeader />
      <main>
        <TheStartScreen />
        <About />
        <Slider
          slides={pets.map((pet) => ({
            img: pet.img,
            name: pet.name,
          }))}
        />
        <HelpSection />
        <Donation />
        <Footer {...local} />
      </main>
    </Container>
  );
};
