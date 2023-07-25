import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { TheHeader } from "./components/TheHeader";
import { TheStartScreen } from "./components/TheStartScreen";
import { localInfo } from "./types";
import { InfoComponyDefault } from "./mock";

function App() {
const [local, setLocal] = useState<localInfo>(InfoComponyDefault)

console.log(local)

useEffect(()=>{
  setLocal(local);
}, )


  return (
    <Container>
      <TheHeader />
      <TheStartScreen />
      <Footer {...local}/>
    </Container>
  );
}

export default App;