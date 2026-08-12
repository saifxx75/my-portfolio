import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AdminApp from './admin/AdminApp';
import './App.css';
import { MotionConfig } from 'framer-motion';

function PublicWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://localhost:8088/widget.js';
    script.dataset.widgetId = 'wgt_bFy1BL_vq0FQH5SO5bEbv5q-';
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}

function AppContent() {
  return (
    <MotionConfig reducedMotion="user">
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="*" element={
          <div className="flex flex-col min-h-screen bg-light-600 dark:bg-dark-600 text-light-100 dark:text-dark-100 transition-colors duration-300">
            <PublicWidget />
            <Navbar />
            <main className="flex-grow pt-20">
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
    </MotionConfig>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
