import {Route, Routes} from 'react-router-dom';
import {About} from './components/About';
import {HelpSection} from './components/HelpSection';
import {Donation} from './components/Donation';
import NotFoundPage from './pages/NotFoundPage';
import {HomePage} from './pages/HomePage';
import {OurPetsPage} from './pages/OurPetsPage';
import ScrollToAnchor from './hooks/UseScrollToAnchor';
import {Slider} from './components/Slider';
import {useEffect} from 'react';

function App() {
  ScrollToAnchor();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        >
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='help'
            element={<HelpSection />}
          />
          <Route
            path='slider'
            element={<Slider />}
          />
          <Route
            path='contact'
            element={<Donation />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Route>
        <Route
          path='ourPets'
          element={<OurPetsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
