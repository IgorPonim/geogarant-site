import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import MezhevoyPlan from './pages/MezhevoyPlan';
import TehPlan from './pages/TehPlan';
import AktObsledovaniya from './pages/AktObsledovaniya';
import SxemaKPT from './pages/SxemaKPT';
import ProektMezhevaniya from './pages/ProektMezhevaniya';
import PerivodSadovogo from './pages/PerivodSadovogo';
import VipiskiEGRN from './pages/VipiskiEGRN';
import TopograficheskayaSemka from './pages/TopograficheskayaSemka';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Advantages />
            <About />
            <ContactForm />
            <Contacts />
          </>
        } />
        <Route path="/services/mejevoi-plan" element={<MezhevoyPlan />} />
        <Route path="/services/teh-plan" element={<TehPlan />} />
        <Route path="/services/akt-obsledovaniya" element={<AktObsledovaniya />} />
        <Route path="/services/sxema-kpt" element={<SxemaKPT />} />
        <Route path="/services/proekt-mezhevaniya" element={<ProektMezhevaniya />} />
        <Route path="/services/perivod-sadovogo" element={<PerivodSadovogo />} />
        <Route path="/services/vipiski-egrn" element={<VipiskiEGRN />} />
        <Route path="/services/topograficheskaya-semka" element={<TopograficheskayaSemka />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;