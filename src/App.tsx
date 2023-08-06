import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { TheHeader } from "./components/TheHeader";
import { TheStartScreen } from "./components/TheStartScreen";
import { localInfo } from "./types";
import { InfoComponyDefault } from "./mock";
import { About } from "./components/About";
import { Slider } from "./components/Slider";
import { HelpSection } from "./components/HelpSection/IconServes";
import { Donation } from "./components/Donation";
import { pets } from "./mock/dataPets";

function App() {
  const [local, setLocal] = useState<localInfo>(InfoComponyDefault);
  const [pet, setPets] = useState(pets);



  // const petCard = pet.map((person, personIndex) => {
  //   const { id, img, name } = person;

  //   let position = "nextSlide";
  //   if (personIndex === currentIndex) {
  //     position = "activeSlide";
  //   }
  //   if (
  //     personIndex === currentIndex - 1 ||
  //     (currentIndex === 0 && personIndex === pet.length - 1)
  //   ) {
  //     position = "lastSlide";
  //   }
  // });

  useEffect(() => {
    setLocal(local);
  });
  return (
    <Container>
      <TheHeader />
      <TheStartScreen />
      <About />
      {/* <Slider  /> */}
      <HelpSection />
      <Donation />
      <Footer {...local} />
    </Container>
  );
}

export default App;
