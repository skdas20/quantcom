import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiBookOpen, FiAward, FiGlobe } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { useInView } from 'react-intersection-observer';

// Quantum animations
const quantumEnergy = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.7; }
  50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.7; }
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(74, 144, 226, 0.9) 0%, rgba(74, 144, 226, 0.7) 50%),
    radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.8) 0%, rgba(255, 107, 53, 0.7) 50%),
    linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/3d39c5fb-2602-4e7d-8bed-a0962b9f0833.png') center center / cover no-repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const StatsPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.8) 1px, transparent 1px),
                    radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.8) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  animation: ${quantumEnergy} 20s linear infinite;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.sizes.lg};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: white;
`;

const StatNumber = styled(motion.div)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.h3`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  margin-bottom: 0.5rem;
`;

const StatDescription = styled.p`
  opacity: 0.9;
  line-height: 1.5;
  font-size: ${theme.sizes.base};
`;

const QuickStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const numberCountVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const stats = [
    {
      icon: <FiUsers />,
      number: '105+',
      label: 'Years of Experience',
      description: 'Collective expertise of our distinguished advisory board'
    },
    {
      icon: <FiBookOpen />,
      number: '50+',
      label: 'Research Publications',
      description: 'Peer-reviewed papers in top-tier journals and conferences'
    },
    {
      icon: <FiAward />,
      number: '15+',
      label: 'Active Projects',
      description: 'Cutting-edge research projects across quantum domains'
    },
    {
      icon: <FiGlobe />,
      number: '10+',
      label: 'Industry Partners',
      description: 'Collaborative partnerships with leading technology companies'
    }
  ];

  return (
    <StatsSection ref={ref}>
      <StatsPattern />
      <Container>
        <SectionHeader
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle>Impact & Excellence</SectionTitle>
          <SectionSubtitle>
            Measurable outcomes from our commitment to advancing quantum computing research and education
          </SectionSubtitle>
        </SectionHeader>

        <StatsGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber
                variants={numberCountVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {stat.number}
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default QuickStats;
