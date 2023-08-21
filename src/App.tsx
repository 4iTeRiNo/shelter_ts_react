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

  useEffect(() => {
    setLocal(local);
  },[local]);
  return (
    <Container>
      <TheHeader />
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
    </Container>
  );
}

export default App;
