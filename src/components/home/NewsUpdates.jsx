import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight, FiTrendingUp } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { useInView } from 'react-intersection-observer';

// Quantum theme animations
const quantumGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 30px rgba(74, 144, 226, 0.2); }
  100% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.3); }
`;

const NewsSection = styled.section`
  padding: 100px 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(74, 144, 226, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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

const NewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeaturedNews = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const NewsImage = styled.div`
  height: 250px;
  background: ${theme.colors.gradient};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
  }
`;

const NewsContent = styled.div`
  padding: 2rem;
`;

const NewsCategory = styled.span`
  display: inline-block;
  background: ${theme.colors.gradientLight};
  color: ${theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  margin-bottom: 1rem;
`;

const NewsTitle = styled.h3`
  font-size: ${theme.sizes['2xl']};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const NewsExcerpt = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.textLighter};
  margin-bottom: 1.5rem;
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.semibold};
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

const NewsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NewsItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.base};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};
  border-left: 4px solid ${theme.colors.primary};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateX(4px);
  }
`;

const NewsItemTitle = styled.h4`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const NewsItemDate = styled.span`
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.textLighter};
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

const NewsUpdates = () => {
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
  const recentNews = [
    {
      title: 'Centre of Excellence for Quantum Computing Established',
      date: 'March 1, 2024',
    },
    {
      title: 'Dr. Prithwineel Paul Appointed as Center-in-Charge',
      date: 'March 1, 2024',
    },
    {
      title: 'Professor Moutushi Singh Joins as Convener',
      date: 'March 1, 2024',
    },
    {
      title: 'Research Infrastructure Setup at Gurukul Campus',
      date: 'April 15, 2024',
    },
  ];

  return (
    <NewsSection ref={ref}>
      <Container>
        <SectionHeader
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >          <SectionTitle>Latest Announcements</SectionTitle>
          <SectionSubtitle>
            Stay updated with the latest developments and milestones at our Centre of Excellence
          </SectionSubtitle>
        </SectionHeader>

        <NewsGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FeaturedNews variants={itemVariants}>
            <NewsImage>
              <FiTrendingUp />
            </NewsImage>            <NewsContent>
              <NewsCategory>Major Milestone</NewsCategory>
              <NewsTitle>
                Centre of Excellence for Quantum Computing Established
              </NewsTitle>
              <NewsExcerpt>
                The Institute of Engineering & Management, Gurukul Campus proudly announces 
                the establishment of its Centre of Excellence for Quantum Computing on March 1st, 2024. 
                Under the leadership of Dr. Prithwineel Paul and Professor Moutushi Singh, 
                the center aims to advance quantum computing research and education.
              </NewsExcerpt>
              <NewsMeta>
                <span className="meta-item">
                  <FiCalendar /> March 1, 2024
                </span>
                <span className="meta-item">
                  <FiUser /> IEM Administration
                </span>
              </NewsMeta>
              <ReadMoreLink to="/about">
                Learn More <FiArrowRight />
              </ReadMoreLink>
            </NewsContent>
          </FeaturedNews>

          <NewsList variants={itemVariants}>
            <h3 style={{ 
              marginBottom: '1.5rem', 
              color: theme.colors.text,
              fontSize: theme.sizes.xl,
              fontWeight: theme.fonts.weights.semibold 
            }}>
              Recent Updates
            </h3>
            {recentNews.map((news, index) => (
              <NewsItem
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <NewsItemTitle>{news.title}</NewsItemTitle>
                <NewsItemDate>{news.date}</NewsItemDate>
              </NewsItem>
            ))}
          </NewsList>
        </NewsGrid>

        <ButtonContainer>
          <ViewAllButton to="/events">
            View All News & Events
            <FiArrowRight />
          </ViewAllButton>
        </ButtonContainer>
      </Container>
    </NewsSection>
  );
};

export default NewsUpdates;
