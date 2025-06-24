import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiZap, FiShield, FiRadio, FiArrowRight } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { useInView } from 'react-intersection-observer';

// Quantum theme animations
const quantumPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(74, 144, 226, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
`;

const ResearchSection = styled.section`
  padding: 100px 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
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
    opacity: 0.03;
    z-index: 0;
  }
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
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(74, 144, 226, 0.3);
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.sizes.lg};
  color: ${theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ResearchGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ResearchCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: 2.5rem;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || theme.colors.gradient};
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const ResearchIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.bgColor || theme.colors.gradientLight};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.iconColor || theme.colors.primary};
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  
  li {
    color: ${theme.colors.textLight};
    padding: 0.25rem 0;
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '•';
      color: ${theme.colors.secondary};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const LearnMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.medium};
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
  
  svg {
    transition: transform ${theme.transitions.fast};
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fonts.weights.semibold};
  text-decoration: none;
  transition: all ${theme.transitions.base};
  box-shadow: ${theme.shadows.md};
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    transition: transform ${theme.transitions.fast};
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const ResearchHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const researchAreas = [
    {
      icon: <FiCpu />,
      title: 'Quantum Algorithms',
      description: 'Developing efficient quantum algorithms for optimization, simulation, and computational problems.',
      features: [
        'Variational Quantum Eigensolvers',
        'Quantum Approximate Optimization',
        'Quantum Fourier Transform',
        'Grover\'s Search Algorithm'
      ],
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #5BA0F2 100%)',
      bgColor: 'rgba(74, 144, 226, 0.1)',
      iconColor: '#4A90E2'
    },    {
      icon: <FiZap />,
      title: 'Quantum Machine Learning',
      description: 'Exploring quantum-enhanced machine learning algorithms and hybrid quantum-classical approaches.',
      features: [
        'Quantum Neural Networks',
        'Variational Quantum Classifiers',
        'Quantum Feature Maps',
        'Quantum Reinforcement Learning'
      ],
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
      bgColor: 'rgba(255, 107, 53, 0.1)',
      iconColor: '#FF6B35'
    },
    {
      icon: <FiShield />,
      title: 'Quantum Cryptography',
      description: 'Advancing quantum key distribution and post-quantum cryptographic protocols.',
      features: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Quantum Random Number Generation',
        'Quantum Digital Signatures'
      ],
      gradient: 'linear-gradient(135deg, #28A745 0%, #34CE57 100%)',
      bgColor: 'rgba(40, 167, 69, 0.1)',
      iconColor: '#28A745'
    },
    {
      icon: <FiRadio />,
      title: 'Quantum Sensing & Metrology',
      description: 'Developing ultra-precise quantum sensors for scientific and industrial applications.',
      features: [
        'Atomic Magnetometry',
        'Quantum Interferometry',
        'Precision Timing',
        'Gravitational Wave Detection'
      ],
      gradient: 'linear-gradient(135deg, #6F42C1 0%, #8B5CF6 100%)',
      bgColor: 'rgba(111, 66, 193, 0.1)',
      iconColor: '#6F42C1'
    }
  ];

  return (
    <ResearchSection ref={ref}>
      <Container>
        <SectionHeader
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle>Research Excellence</SectionTitle>
          <SectionSubtitle>
            Exploring the frontiers of quantum computing across multiple disciplines 
            with cutting-edge research and innovative solutions
          </SectionSubtitle>
        </SectionHeader>

        <ResearchGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {researchAreas.map((area, index) => (
            <ResearchCard
              key={index}
              variants={itemVariants}
              gradient={area.gradient}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ResearchIcon bgColor={area.bgColor} iconColor={area.iconColor}>
                {area.icon}
              </ResearchIcon>
              <CardTitle>{area.title}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
              <CardFeatures>
                {area.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </CardFeatures>
              <LearnMoreLink to="/research">
                Learn More <FiArrowRight />
              </LearnMoreLink>
            </ResearchCard>
          ))}
        </ResearchGrid>

        <ButtonContainer>
          <ViewAllButton to="/research">
            View All Research Areas
            <FiArrowRight />
          </ViewAllButton>
        </ButtonContainer>
      </Container>
    </ResearchSection>
  );
};

export default ResearchHighlights;
