import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiTarget, FiEye, FiAward, FiUsers, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
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
  background-image: radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                    radial-gradient(circle at 75% 75%, white 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
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

const DarkSection = styled.section`
  padding: 100px 0;
  position: relative;
  background: 
    radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
`;

const LightSection = styled.section`
  padding: 100px 0;
  position: relative;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4A90E2, #FFD700);
    border-radius: 2px;
  }
`;

const WhiteSectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  color: white;
  text-shadow: 0 2px 15px rgba(74, 144, 226, 0.5);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4A90E2, #FFD700);
    border-radius: 2px;
  }
`;

const ImpactSectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  background: linear-gradient(45deg, #4A90E2, #FF6B35, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4A90E2, #FFD700);
    border-radius: 2px;
  }
`;

const LightSectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4A90E2, #FFD700);
    border-radius: 2px;
  }
`;

const SectionContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  
  p {
    font-size: ${theme.sizes.lg};
    color: ${theme.colors.textLight};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const LightSectionContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  
  p {
    font-size: ${theme.sizes.lg};
    color: ${theme.colors.textLight};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const VisionMissionCard = styled(motion.div)`
  background: 
    linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(255, 107, 53, 0.15) 50%, rgba(255, 215, 0, 0.1) 100%),
    rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid;
  border-image: linear-gradient(45deg, rgba(74, 144, 226, 0.4), rgba(255, 215, 0, 0.4), rgba(255, 107, 53, 0.4)) 1;
  padding: 3rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(74, 144, 226, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(74, 144, 226, 0.05), transparent);
    opacity: 0;
    transition: opacity ${theme.transitions.base};
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(74, 144, 226, 0.3),
      0 0 60px rgba(255, 215, 0, 0.2);
    border-image: linear-gradient(45deg, rgba(74, 144, 226, 0.6), rgba(255, 215, 0, 0.6), rgba(255, 107, 53, 0.6)) 1;
    
    &::before {
      opacity: 1;
    }
  }
`;

const LightVisionMissionCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(255, 107, 53, 0.15) 100%);
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #4A90E2;
  font-size: 2rem;
  
  /* Dark section styling */
  .dark-section & {
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%);
    border-color: rgba(74, 144, 226, 0.3);
    color: #4A90E2;
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.sizes['2xl']};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  
  /* Dark section styling */
  .dark-section & {
    color: white;
  }
`;

const CardContent = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  font-size: ${theme.sizes.lg};
  
  /* Dark section styling */
  .dark-section & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ObjectivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  /* First row: 3 cards taking 2 columns each */
  > div:nth-child(1) {
    grid-column: span 2;
  }
  
  > div:nth-child(2) {
    grid-column: span 2;
  }
  
  > div:nth-child(3) {
    grid-column: span 2;
  }
  
  /* Second row: 2 cards taking 3 columns each, centered */
  > div:nth-child(4) {
    grid-column: span 3;
  }
  
  > div:nth-child(5) {
    grid-column: span 3;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    
    > div {
      grid-column: span 1 !important;
    }
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    
    > div {
      grid-column: span 1 !important;
    }
  }
`;

const ObjectiveCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-left: 4px solid #4A90E2;
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(74, 144, 226, 0.15);
    transform: translateY(-4px);
    border-left-color: #FF6B35;
  }
`;

const LightObjectiveCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${theme.colors.primary};
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const StatsSection = styled.section`
  background: white;
  color: ${theme.colors.text};
  padding: 80px 0;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  padding: 1.5rem;
  
  .stat-number {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: ${theme.fonts.weights.bold};
    background: linear-gradient(45deg, #4A90E2, #FF6B35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: ${theme.sizes.lg};
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.text};
  }
`;

const Section = styled.section`
  padding: 100px 0;
  position: relative;
`;

// Keyframes for quantum animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-30px) rotate(270deg); }
`;

const orbitAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`;

const pulseAnimation = keyframes`
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
`;

const ObjectiveTitle = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.bold};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

const ObjectiveDescription = styled.p`
  font-size: ${theme.sizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
`;

const ObjectivesSection = styled.section`
  padding: 100px 0;
  position: relative;
  background: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
  
  /* Quantum animation 1: Floating particles */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(74, 144, 226, 0.3) 1px, transparent 1px),
      radial-gradient(circle at 60% 80%, rgba(255, 215, 0, 0.3) 1px, transparent 1px),
      radial-gradient(circle at 80% 30%, rgba(255, 107, 53, 0.3) 1px, transparent 1px);
    background-size: 80px 80px, 120px 120px, 100px 100px;
    background-position: 0 0, 40px 60px, 80px 20px;
    animation: ${floatAnimation} 15s ease-in-out infinite;
    z-index: 0;
  }
  
  /* Quantum animation 2: Orbiting rings */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin: -150px 0 0 -150px;
    border: 1px solid rgba(74, 144, 226, 0.2);
    border-radius: 50%;
    animation: ${orbitAnimation} 20s linear infinite;
    z-index: 0;
  }
`;

const ObjectivesPattern = styled.div`
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
  /* Quantum animation 3: Pulsing grid */
  animation: ${pulseAnimation} 8s ease-in-out infinite;
  z-index: 0;
`;

const About = () => {
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

  const objectives = [
    {
      icon: <FiTarget />,
      title: 'Research Excellence',
      description: 'Conduct cutting-edge research in quantum computing algorithms, hardware, and applications.'
    },
    {
      icon: <FiUsers />,
      title: 'Talent Development',
      description: 'Train the next generation of quantum scientists and engineers through comprehensive education programs.'
    },
    {
      icon: <FiGlobe />,
      title: 'Industry Collaboration',
      description: 'Foster partnerships with industry leaders to accelerate quantum technology adoption.'
    },
    {
      icon: <FiAward />,
      title: 'Innovation Hub',
      description: 'Serve as a premier destination for quantum computing research and development in India.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Knowledge Translation',
      description: 'Bridge the gap between theoretical research and practical quantum applications.'
    }
  ];  const stats = [
    { number: '15+', label: 'Research Papers' },
    { number: '25+', label: 'Faculty & Staff' },
    { number: '100+', label: 'Students' },
    { number: '15+', label: 'Active Projects' },
    { number: '10+', label: 'Industry Partners' }
  ];

  return (
    <AboutContainer>
      <Helmet>
        <title>About Us - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Learn about IEM Centre of Excellence for Quantum Computing - our vision, mission, and commitment to advancing quantum technologies" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About QuantCom
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering quantum computing research and education to shape the future of technology
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <SectionContent
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              The IEM Centre of Excellence for Quantum Computing (QuantCom) was established with 
              a bold vision to position India at the forefront of the quantum revolution. Founded 
              on principles of academic excellence, innovative research, and industry collaboration, 
              we represent a new paradigm in quantum education and research.
            </p>
            <p>
              Our center brings together distinguished faculty, brilliant researchers, and 
              industry experts to tackle the most challenging problems in quantum computing. 
              With a collective experience of over 105 years in our advisory board, we combine 
              deep theoretical knowledge with practical expertise to drive meaningful innovation.
            </p>
          </SectionContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Vision & Mission</SectionTitle>
          <VisionMissionGrid>
            <VisionMissionCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CardIcon>
                <FiEye />
              </CardIcon>              <CardTitle>Our Vision</CardTitle>
              <CardContent>
                <strong>To be a centre for research, advanced education, and collaborative innovation in Quantum Computing.</strong>
                <br /><br />
                To contribute to the global advancement of Quantum Technologies, driving breakthroughs 
                in scientific discovery, industry applications, and societal progress.
              </CardContent>
            </VisionMissionCard>

            <VisionMissionCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CardIcon>
                <FiTarget />
              </CardIcon>              <CardTitle>Our Mission</CardTitle>
              <CardContent>
                <strong>Lead Innovative Research:</strong> Advance the development of new quantum technologies to solve complex scientific and industrial challenges.
                <br /><br />
                <strong>Cultivate Talent and Leadership:</strong> Develop the next generation of Quantum scientists, engineers, and thought leaders through comprehensive education and mentorship programs.
                <br /><br />
                <strong>Foster Academic and Industry Collaboration:</strong> Build a dynamic ecosystem where academia, industry, and government agencies collaborate to drive impactful innovations and real-world applications in quantum technologies.
                <br /><br />
                <strong>Establish Responsible Development Practices:</strong> Integrate ethical guidelines and inclusivity into research, education, and industry collaborations to ensure the responsible growth of quantum technologies.
              </CardContent>
            </VisionMissionCard>
          </VisionMissionGrid>
        </Container>
      </Section>      <ObjectivesSection ref={ref}>
        <ObjectivesPattern />
        <Container>
          <WhiteSectionTitle>Our Objectives</WhiteSectionTitle>
          <ObjectivesGrid>
            {objectives.map((objective, index) => (
              <ObjectiveCard
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
              >
                <ObjectiveTitle>
                  {objective.icon}
                  {objective.title}
                </ObjectiveTitle>
                <ObjectiveDescription>
                  {objective.description}
                </ObjectiveDescription>
              </ObjectiveCard>
            ))}
          </ObjectivesGrid>
        </Container>
      </ObjectivesSection><StatsSection>
        <Container>
          <ImpactSectionTitle>
            Our Impact
          </ImpactSectionTitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>
    </AboutContainer>
  );
};

export default About;
