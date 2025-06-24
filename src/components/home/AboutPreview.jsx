import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiEye, FiTrendingUp } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { useInView } from 'react-intersection-observer';

// Quantum theme animations
const quantumFloat = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AboutSection = styled.section`
  padding: 100px 0;
  background: 
    radial-gradient(circle at 70% 30%, rgba(74, 144, 226, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/3d39c5fb-2602-4e7d-8bed-a0962b9f0833.png') center center / cover no-repeat;
    opacity: 0.02;
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
  background: linear-gradient(45deg, #4A90E2, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.sizes.lg};
  color: ${theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled(motion.div)`
  h3 {
    font-size: ${theme.sizes['2xl']};
    font-weight: ${theme.fonts.weights.semibold};
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${theme.colors.textLight};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.semibold};
  padding: 0.75rem 1.5rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
  
  svg {
    transition: transform ${theme.transitions.fast};
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const VisionCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const VisionIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${theme.colors.gradientLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;

const VisionTitle = styled.h4`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const VisionDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
`;

const AboutPreview = () => {
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
  const visionData = [
    {
      icon: <FiEye />,
      title: 'Vision',
      description: 'To be a centre for research, advanced education, and collaborative innovation in Quantum Computing, contributing to global advancement of Quantum Technologies.',
    },
    {
      icon: <FiTarget />,
      title: 'Mission',
      description: 'Lead innovative research, cultivate talent and leadership, foster academic and industry collaboration, and establish responsible development practices in quantum technologies.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Impact',
      description: 'Driving breakthroughs in scientific discovery, industry applications, and societal progress through ethical and inclusive quantum technology development.',
    },
  ];

  return (
    <AboutSection ref={ref}>
      <Container>
        <SectionHeader
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle>Advancing Quantum Frontiers</SectionTitle>
          <SectionSubtitle>
            Pioneering research and innovation in quantum computing technologies 
            to solve tomorrow's most complex challenges
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          <TextContent
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3>Leading Quantum Research Excellence</h3>
            <p>
              The IEM Centre of Excellence for Quantum Computing represents a confluence of 
              cutting-edge research, academic excellence, and industry collaboration. Our 
              multidisciplinary approach combines theoretical foundations with practical 
              applications to advance the quantum computing landscape.
            </p>
            <p>
              With a distinguished advisory board bringing over 105 years of collective 
              experience, we are positioned to tackle the most challenging problems in 
              quantum algorithms, machine learning, cryptography, and sensing technologies.
            </p>
            <LearnMoreButton to="/about">
              Learn More About Us
              <FiArrowRight />
            </LearnMoreButton>
          </TextContent>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <VisionGrid>
              {visionData.map((item, index) => (
                <VisionCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VisionIcon>{item.icon}</VisionIcon>
                  <VisionTitle>{item.title}</VisionTitle>
                  <VisionDescription>{item.description}</VisionDescription>
                </VisionCard>
              ))}
            </VisionGrid>
          </motion.div>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default AboutPreview;
