import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Technology from './pages/products/Technology';
import Certificates from './pages/company/Certificates';
import References from './pages/products/References';
import History from './pages/company/History';
import Sustainability from './pages/company/Sustainability';
import News from './pages/company/News';
import Team from './pages/company/Team';
import FactoryPage from './pages/products/FactoryPage';
import Accessibility from './pages/company/Accessibility';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/company/PrivacyPolicy';
import TermsOfUse from './pages/company/TermsOfUse';
const App = () => {
  const [isNavbarDisabled, setIsNavbarDisabled] = useState(false);

  const disableNavbar = () => {
    setIsNavbarDisabled(true);
  };

  const enableNavbar = () => {
    setIsNavbarDisabled(false);
  };
  return (
    <Router>
      <ScrollToTop />
      <Layout isNavbarDisabled={isNavbarDisabled}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wptech" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/news" element={<News />} />
          <Route path="/company/sustainability" element={<Sustainability />} />
          <Route path="/company/certificates" element={<Certificates disableNavbar={disableNavbar} enableNavbar={enableNavbar} />} />
          <Route path="/products/technology" element={<Technology />} />
          <Route path="/products/references" element={<References disableNavbar={disableNavbar} enableNavbar={enableNavbar} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="L3Byb2R1Y3RzL2ZhY3Rvcnk=" element={<FactoryPage />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;