import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DotsBackground from './components/DotsBackground/DotsBackground'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import QuemeCaseStudy from './pages/CaseStudies/QuemeCaseStudy'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Always show loading screen on app load
    setIsLoading(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setHasLoaded(true)
  }

  return (
    <div className="app">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {hasLoaded && (
        <>
          <DotsBackground />
          <Navbar />
          <div className={`page-content ${location.pathname === '/' ? 'home-page' : 'other-page'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies/queme" element={<QuemeCaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
