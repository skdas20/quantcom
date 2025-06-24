import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/common/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import useLoading from './hooks/useLoading';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  const { isLoading, progress } = useLoading(2000); // 2 second loading time

  return (
    <Router>
      <Helmet>
        <title>QuantCom - IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Leading research and innovation in quantum computing technologies at IEM Centre of Excellence" />
      </Helmet>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" progress={progress} />
        ) : (
          <Layout key="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
