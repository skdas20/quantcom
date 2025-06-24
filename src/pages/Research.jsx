import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCpu, FiZap, FiShield, FiRadio, FiLayers, FiTool } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { useInView } from 'react-intersection-observer';

const ResearchContainer = styled.div`
  margin-top: 0;
`;

const HeroSection = styled.section`
  background: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 180px 0 100px 0;
  text-align: center;
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
    opacity: 0.05;
    z-index: 0;
  }
`;

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 25% 25%, white 1px, transparent 1px);
  background-size: 50px 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: 1.5rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${theme.sizes.xl};
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 100px 0;
  position: relative;
  
  &:nth-child(odd) {
    background: 
      radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 70%),
      linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  }
  
  &:nth-child(even) {
    background: white;
  }
`;

const FilterSection = styled.section`
  padding: 80px 0;
  position: relative;
  background: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
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

const FilterPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                    radial-gradient(circle at 75% 75%, white 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  padding: 0.875rem 2rem;
  border: 2px solid;
  border-image: ${props => props.active 
    ? 'linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35) 1' 
    : 'linear-gradient(45deg, rgba(74, 144, 226, 0.3), rgba(255, 215, 0, 0.3), rgba(255, 107, 53, 0.3)) 1'
  };
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(74, 144, 226, 0.3) 0%, rgba(255, 215, 0, 0.2) 50%, rgba(255, 107, 53, 0.3) 100%)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  backdrop-filter: blur(15px);
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fonts.weights.semibold};
  font-size: ${theme.sizes.base};
  transition: all ${theme.transitions.base};
  box-shadow: ${props => props.active 
    ? '0 6px 20px rgba(74, 144, 226, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)' 
    : '0 4px 16px rgba(0, 0, 0, 0.1)'
  };
  position: relative;
  z-index: 2;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.4) 0%, rgba(255, 215, 0, 0.3) 50%, rgba(255, 107, 53, 0.4) 100%);
    color: white;
    transform: translateY(-3px) scale(1.02);
    border-image: linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35) 1;
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4), 0 0 30px rgba(255, 215, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

const ResearchGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ResearchCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(74, 144, 226, 0.1);
  border-radius: ${theme.borderRadius.lg};
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || 'linear-gradient(135deg, #4A90E2 0%, #FF6B35 100%)'};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(74, 144, 226, 0.15);
    border-color: rgba(74, 144, 226, 0.3);
  }
  
  /* Dark section styling */
  .dark-section & {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    
    &:hover {
      border-color: rgba(74, 144, 226, 0.3);
    }
  }
`;

const ResearchIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.bgColor || 'linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)'};
  border: 2px solid ${props => props.iconColor || '#4A90E2'};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.iconColor || '#4A90E2'};
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  
  /* Dark section styling */
  .dark-section & {
    color: white;
  }
`;

const CardDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  /* Dark section styling */
  .dark-section & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const TechList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  
  li {
    color: ${theme.colors.textLight};
    padding: 0.25rem 0;
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '▸';
      color: #FF6B35;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
  
  /* Dark section styling */
  .dark-section & li {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ProjectCount = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.gradientLight};
  color: ${theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
`;

const Research = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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
      category: 'algorithms',
      icon: <FiCpu />,
      title: 'Quantum Algorithms',
      description: 'Research focus on developing efficient quantum algorithms for optimization and computational problems. Our team is setting up research infrastructure and forming collaborations.',
      technologies: [
        'Variational Quantum Eigensolvers (VQE)',
        'Quantum Approximate Optimization Algorithm (QAOA)',
        'Quantum Machine Learning Algorithms',
        'Optimization Problem Solving'
      ],
      projects: 'Coming Soon',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #5BA0F2 100%)',
      bgColor: 'rgba(74, 144, 226, 0.1)',
      iconColor: '#4A90E2'
    },
    {
      category: 'ml',
      icon: <FiZap />,
      title: 'Quantum Machine Learning',
      description: 'Exploring quantum-enhanced machine learning approaches and hybrid quantum-classical methods. Research initiatives are being planned for 2024-2025.',
      technologies: [
        'Quantum Neural Networks',
        'Variational Quantum Classifiers',
        'Quantum Feature Maps',
        'Hybrid Quantum-Classical Models'
      ],
      projects: 'Coming Soon',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
      bgColor: 'rgba(255, 107, 53, 0.1)',
      iconColor: '#FF6B35'
    },
    {
      category: 'crypto',
      icon: <FiShield />,
      title: 'Quantum Cryptography',
      description: 'Developing research capabilities in quantum security and post-quantum cryptographic methods. Foundation work is in progress.',
      technologies: [
        'Quantum Key Distribution concepts',
        'Post-Quantum Cryptography study',
        'Security Protocol Analysis',
        'Theoretical Framework Development'
      ],
      projects: 'Coming Soon',
      gradient: 'linear-gradient(135deg, #28A745 0%, #34CE57 100%)',
      bgColor: 'rgba(40, 167, 69, 0.1)',
      iconColor: '#28A745'
    },
    {
      category: 'education',
      icon: <FiRadio />,
      title: 'Quantum Education & Training',
      description: 'Developing educational programs and training modules for quantum computing. Building curriculum and research methodology.',
      technologies: [
        'Curriculum Development',
        'Student Training Programs',
        'Research Methodology',
        'Academic Collaboration Framework'
      ],
      projects: 'In Development',
      gradient: 'linear-gradient(135deg, #6F42C1 0%, #8B5CF6 100%)',
      bgColor: 'rgba(111, 66, 193, 0.1)',      iconColor: '#6F42C1'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Research' },
    { key: 'algorithms', label: 'Algorithms' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'crypto', label: 'Cryptography' },
    { key: 'sensing', label: 'Sensing' },
    { key: 'hardware', label: 'Hardware' },
    { key: 'applications', label: 'Applications' }
  ];

  const filteredResearch = activeFilter === 'all' 
    ? researchAreas 
    : researchAreas.filter(area => area.category === activeFilter);

  return (
    <ResearchContainer>
      <Helmet>
        <title>Research Areas - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Explore our cutting-edge research in quantum algorithms, machine learning, cryptography, sensing, and hardware development" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Research Areas
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring the frontiers of quantum computing through interdisciplinary research 
            and innovative solutions
          </HeroSubtitle>
        </Container>
      </HeroSection>      <FilterSection ref={ref}>
        <FilterPattern />
        <Container>
          <FilterTabs>
            {filters.map((filter) => (
              <FilterTab
                key={filter.key}
                active={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </FilterTab>
            ))}
          </FilterTabs>

          <ResearchGrid
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredResearch.map((area, index) => (
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
                <TechList>
                  {area.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </TechList>
                <ProjectCount>
                  <FiLayers />
                  {area.projects} Active Projects
                </ProjectCount>
              </ResearchCard>
            ))}          </ResearchGrid>
        </Container>
      </FilterSection>
    </ResearchContainer>
  );
};

export default Research;
