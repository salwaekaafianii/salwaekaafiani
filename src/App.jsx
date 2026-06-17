import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage'; // Pastikan path ini benar

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Gunakan AnimatePresence agar WelcomePage bisa menghilang dengan animasi */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <WelcomePage key="welcome" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="main-content">
            <Header />
            <div className="min-h-screen">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<LandingPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;