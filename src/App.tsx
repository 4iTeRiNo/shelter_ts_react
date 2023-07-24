import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { TheHeader } from "./components/TheHeader";
import { TheStartScreen } from "./components/TheStartScreen";

function App() {
  return (
    <Container>
      <TheHeader />
      <TheStartScreen />
      <Footer/>
    </Container>
  );
}

export default App;