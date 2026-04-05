import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <div className="mt-24">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App