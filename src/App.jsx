import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './pages/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const Company = lazy(() => import('./pages/Company'));
const Contact = lazy(() => import('./pages/Contact'));
const Technology = lazy(() => import('./pages/products/Technology'));
const Certificates = lazy(() => import('./pages/company/Certificates'));
const References = lazy(() => import('./pages/products/References'));
const History = lazy(() => import('./pages/company/History'));
const Sustainability = lazy(() => import('./pages/company/Sustainability'));
const News = lazy(() => import('./pages/company/News'));
const Team = lazy(() => import('./pages/company/Team'));
const FactoryPage = lazy(() => import('./pages/products/FactoryPage'));
const Accessibility = lazy(() => import('./pages/company/Accessibility'));
const PrivacyPolicy = lazy(() => import('./pages/company/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/company/TermsOfUse'));

const theme = createTheme();

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

const App = () => {
  const [isNavbarDisabled, setIsNavbarDisabled] = useState(false);

  const disableNavbar = () => {
    setIsNavbarDisabled(true);
  };

  const enableNavbar = () => {
    setIsNavbarDisabled(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Layout isNavbarDisabled={isNavbarDisabled}>
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;