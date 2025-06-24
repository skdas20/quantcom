import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiMail, FiLinkedin, FiGlobe, FiAward } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { useInView } from 'react-intersection-observer';

const TeamContainer = styled.div`
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

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  text-align: center;
  
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

const Section = styled.section`
  padding: 100px 0;
  position: relative;
  background: #f8f9fa;
`;

const SectionDescription = styled.p`
  font-size: ${theme.sizes.lg};
  color: ${theme.colors.textLight};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const ExperienceHighlight = styled.div`
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
  border: 2px solid rgba(74, 144, 226, 0.2);
  color: ${theme.colors.text};
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  .experience-number {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: ${theme.fonts.weights.bold};
    background: linear-gradient(45deg, #4A90E2, #FF6B35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .experience-text {
    font-size: ${theme.sizes.lg};
    color: ${theme.colors.textLight};
  }
`;

const TeamTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TeamTab = styled.button`
  padding: 0.875rem 2rem;
  border: 2px solid;
  border-image: ${props => props.active 
    ? 'linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35) 1' 
    : 'linear-gradient(45deg, rgba(74, 144, 226, 0.4), rgba(255, 215, 0, 0.4), rgba(255, 107, 53, 0.4)) 1'
  };
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #4A90E2 0%, #FFD700 50%, #FF6B35 100%)' 
    : 'white'
  };
  color: ${props => props.active ? 'white' : theme.colors.text};
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
    background: linear-gradient(135deg, #4A90E2 0%, #FFD700 50%, #FF6B35 100%);
    color: white;
    transform: translateY(-3px) scale(1.02);
    border-image: linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35) 1;
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4), 0 0 30px rgba(255, 215, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const MemberCard = styled(motion.div)`
  background: 
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  border: 2px solid;
  border-image: linear-gradient(45deg, rgba(74, 144, 226, 0.5), rgba(255, 215, 0, 0.5), rgba(255, 107, 53, 0.5)) 1;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(74, 144, 226, 0.1);
  transition: all ${theme.transitions.base};
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(74, 144, 226, 0.1), transparent);
    opacity: 0;
    transition: opacity ${theme.transitions.base};
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(74, 144, 226, 0.2),
      0 0 60px rgba(255, 215, 0, 0.1);
    border-image: linear-gradient(45deg, rgba(74, 144, 226, 0.8), rgba(255, 215, 0, 0.8), rgba(255, 107, 53, 0.8)) 1;
    
    &::before {
      opacity: 1;
    }
  }
`;

const MemberPhoto = styled.div`
  height: 250px;
  background: ${props => props.image ? `url(${props.image}) center center / cover no-repeat` : 'linear-gradient(135deg, rgba(74, 144, 226, 0.6) 0%, rgba(255, 215, 0, 0.5) 50%, rgba(255, 107, 53, 0.6) 100%)'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.image ? 'linear-gradient(45deg, rgba(74, 144, 226, 0.3), rgba(255, 215, 0, 0.2), rgba(255, 107, 53, 0.3))' : 'none'};
    opacity: 0;
    transition: opacity ${theme.transitions.base};
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const MemberInfo = styled.div`
  padding: 2rem;
`;

const MemberName = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: white;
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  color: #4A90E2;
  font-weight: ${theme.fonts.weights.medium};
  margin-bottom: 0.5rem;
`;

const MemberAffiliation = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${theme.sizes.sm};
  margin-bottom: 1rem;
`;

const MemberExperience = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(74, 144, 226, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.5);
  color: #4A90E2;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  margin-bottom: 1rem;
`;

const MemberExpertise = styled.div`
  margin-bottom: 1.5rem;
  
  .expertise-title {
    font-size: ${theme.sizes.sm};
    font-weight: ${theme.fonts.weights.semibold};
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .expertise-list {
    font-size: ${theme.sizes.sm};
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    transition: all ${theme.transitions.fast};
    
    &:hover {
      background: rgba(74, 144, 226, 0.4);
      color: white;
      transform: translateY(-2px);
      border-color: #4A90E2;
      box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
    }
  }
`;

const Team = () => {
  const [activeTab, setActiveTab] = useState('all');
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
  };  const teamMembers = [
    {
      name: 'Dr. Saikat Basu',
      title: 'Quantum Computing Research Lead',      affiliation: 'LTIMindtree',
      experience: '15+ Years',
      expertise: 'Quantum Computing Research, Industry Applications, Technology Innovation',
      image: '/assets/saikat.jpeg',
      email: 'saikat.basu@ltimindtree.com'
    },
    {
      name: 'Dr. Ritajit Majumdar',
      title: 'Research Scientist',
      affiliation: 'IBM',
      experience: '12+ Years',
      expertise: 'Quantum Computing, IBM Quantum Technologies, Research & Development',
      image: '/assets/ritajit.jpeg',
      email: 'ritajit.majumdar@ibm.com'
    },
    {
      name: 'Dr. Mrityunjay Ghosh',
      title: 'Quantum Computing Principal',
      affiliation: 'HCL Technologies',
      experience: '14+ Years',
      expertise: 'Quantum Computing, Enterprise Solutions, Technology Leadership',
      image: '/assets/mrityunjay.jpeg',
      email: 'mrityunjay.ghosh@hcl.com'
    },
    {
      name: 'Dr. Srinivasa Prasannaa V',
      title: 'Senior Researcher',
      affiliation: 'CQUERE, TCG CREST',
      experience: '10+ Years',
      expertise: 'Quantum Computing Research, Quantum Algorithms, Academic Research',
      image: '/assets/srinivasan.jpg',
      email: 'srinivasa.prasannaa@tcgcrest.org'
    },
    {
      name: 'Dr. Sanjay Chakraborty',
      title: 'Associate Professor',
      affiliation: 'Linköping University, Sweden',
      experience: '16+ Years',
      expertise: 'Quantum Computing, Academic Research, International Collaboration',
      image: '/assets/sanjay.jpeg',
      email: 'sanjay.chakraborty@liu.se'
    },
    {
      name: 'Dr. Prithwineel Paul',
      title: 'Faculty in Charge & Associate Professor',
      affiliation: 'Institute of Engineering & Management, Kolkata',
      experience: '12+ Years',
      expertise: 'Quantum Computing Research, Center Leadership, Academic Administration',
      image: '/assets/prithwineel.png',
      email: 'prithwineel.paul@iem.edu.in'
    }
  ];  const tabs = [
    { key: 'all', label: 'All Team Members', count: teamMembers.length }
  ];

  const getCurrentTeam = () => {
    return teamMembers;
  };

  return (
    <TeamContainer>
      <Helmet>
        <title>Our Team - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Meet our distinguished team of quantum computing experts, researchers, and advisors with over 105 years of collective experience" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Distinguished experts and researchers driving quantum computing innovation 
            with unparalleled expertise and vision
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>          <ExperienceHighlight>
            <div className="experience-number">80+</div>
            <div className="experience-text">Years Combined Experience - Team Members</div>
          </ExperienceHighlight>          <SectionTitle>Our Team</SectionTitle>
          <SectionDescription>
            Meet our distinguished team of quantum computing experts, researchers, and industry leaders 
            driving innovation in quantum technologies and education.
          </SectionDescription>

          <TeamTabs>
            {tabs.map((tab) => (
              <TeamTab
                key={tab.key}
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label} ({tab.count})
              </TeamTab>
            ))}
          </TeamTabs>

          <TeamGrid
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {getCurrentTeam().map((member, index) => (
              <MemberCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >                <MemberPhoto image={member.image}>
                  {!member.image && member.name.split(' ').map(n => n[0]).join('')}
                </MemberPhoto>
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <MemberAffiliation>{member.affiliation}</MemberAffiliation>                  <MemberExperience>
                    <FiAward />
                    {member.experience}
                  </MemberExperience>
                  <MemberExpertise>
                    <div className="expertise-title">Areas of Expertise:</div>
                    <div className="expertise-list">{member.expertise}</div>
                  </MemberExpertise>                  <ContactLinks>
                    <a href={`mailto:${member.email || `${member.name.toLowerCase().replace(' ', '.')}@iem.edu.in`}`}>
                      <FiMail />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FiLinkedin />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FiGlobe />
                    </a>
                  </ContactLinks>
                </MemberInfo>
              </MemberCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </TeamContainer>
  );
};

export default Team;
