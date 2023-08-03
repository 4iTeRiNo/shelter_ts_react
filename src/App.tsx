import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { TheHeader } from "./components/TheHeader";
import { TheStartScreen } from "./components/TheStartScreen";
import { localInfo } from "./types";
import { InfoComponyDefault } from "./mock";
import { About } from "./components/About";
import { Slider } from "./components/Slider";
import { HelpSection } from "./components/HelpSection";
import { Donation } from "./components/Donation";

function App() {
  const [local, setLocal] = useState<localInfo>(InfoComponyDefault);

  useEffect(() => {
    setLocal(local);
  });
  return (
    <Container>
      <TheHeader />
      <TheStartScreen />
      <About />
      <Slider img="" name=""/>
      <HelpSection/>
      <Donation/>
      <Footer {...local} />
    </Container>
  );
}

export default App;
