import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ResearchHighlights from '../components/home/ResearchHighlights';
import NewsUpdates from '../components/home/NewsUpdates';
import QuickStats from '../components/home/QuickStats';

const HomeContainer = styled.div`
  padding-top: 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>Home - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Welcome to IEM Centre of Excellence for Quantum Computing - Leading research and innovation in quantum technologies" />
      </Helmet>
        <HeroSection />
      <AboutPreview />
      <ResearchHighlights />
      <QuickStats />
      <NewsUpdates />
    </HomeContainer>
  );
};

export default Home;
