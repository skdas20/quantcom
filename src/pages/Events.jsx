import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { useInView } from 'react-intersection-observer';

const EventsContainer = styled.div`
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

const Section = styled.section`
  padding: 100px 0;
  
  &:nth-child(even) {
    background: ${theme.colors.backgroundLight};
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: ${theme.sizes.lg};
  color: ${theme.colors.textLight};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const EventTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const EventTab = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? theme.colors.primary : 'transparent'};
  background: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.text};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fonts.weights.medium};
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.sm};
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const EventsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const EventCard = styled(motion.div)`
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

const EventImage = styled.div`
  height: 200px;
  background: ${props => props.gradient || theme.colors.gradient};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const EventBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.bgColor || 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.color || 'white'};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  backdrop-filter: blur(10px);
`;

const EventContent = styled.div`
  padding: 2rem;
`;

const EventTitle = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const EventDescription = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: ${theme.sizes.sm};
    color: ${theme.colors.textLight};
    
    svg {
      color: ${theme.colors.primary};
      font-size: 1rem;
    }
  }
`;

const EventActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.base};
  font-weight: ${theme.fonts.weights.medium};
  text-decoration: none;
  transition: all ${theme.transitions.fast};
  font-size: ${theme.sizes.sm};
  
  &.primary {
    background: ${theme.colors.primary};
    color: white;
    
    &:hover {
      background: ${theme.colors.secondary};
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    border: 2px solid ${theme.colors.textLight};
    color: ${theme.colors.textLight};
    
    &:hover {
      background: ${theme.colors.textLight};
      color: white;
    }
  }
  
  &.completed {
    background: #6c757d;
    color: white;
    cursor: not-allowed;
    opacity: 0.8;
    
    &:hover {
      background: #6c757d;
      transform: none;
    }
  }
`;

const FeaturedEvent = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: 3rem;
  box-shadow: ${theme.shadows.xl};
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${theme.colors.gradient};
  }
`;

const FeaturedTitle = styled.h3`
  font-size: ${theme.sizes['2xl']};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const FeaturedDescription = styled.p`
  font-size: ${theme.sizes.lg};
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeaturedMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  .meta-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    svg {
      color: ${theme.colors.primary};
      font-size: 1.2rem;
    }
    
    .meta-label {
      font-weight: ${theme.fonts.weights.medium};
      color: ${theme.colors.text};
    }
    
    .meta-value {
      color: ${theme.colors.textLight};
    }  }
`;

const SpeakersSection = styled.div`
  margin: 2rem 0;
`;

const SpeakersTitle = styled.h4`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SpeakersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SpeakerCard = styled.div`
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: 1.5rem;
  text-align: center;
  transition: all ${theme.transitions.base};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-4px);
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(255, 107, 53, 0.15) 100%);
  }
`;

const SpeakerImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: url(${props => props.src}) center center / cover no-repeat;
  border: 3px solid ${theme.colors.primary};
  box-shadow: ${theme.shadows.md};
`;

const SpeakerName = styled.h5`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const SpeakerTitle = styled.p`
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.textLight};
  margin-bottom: 0.25rem;
`;

const SpeakerAffiliation = styled.p`
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.medium};
  margin-bottom: 0.75rem;
`;

const SpeakerTopic = styled.p`
  font-size: ${theme.sizes.xs};
  color: ${theme.colors.textLight};
  font-style: italic;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.base};
`;

const ScheduleSection = styled.div`
  margin: 2rem 0;
`;

const ScheduleTitle = styled.h4`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const DayCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: 1.5rem;
  box-shadow: ${theme.shadows.sm};
  border-left: 4px solid ${theme.colors.primary};
`;

const DayTitle = styled.h5`
  font-size: ${theme.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const DayDate = styled.p`
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.textLight};
  margin-bottom: 1rem;
`;

const SessionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SessionItem = styled.div`
  padding: 0.75rem;
  background: ${theme.colors.backgroundLight};
  border-radius: ${theme.borderRadius.base};
  border-left: 3px solid ${theme.colors.secondary};
`;

const SessionTime = styled.p`
  font-size: ${theme.sizes.xs};
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.medium};
  margin-bottom: 0.25rem;
`;

const SessionTitle = styled.p`
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.text};
  margin-bottom: 0.25rem;
`;

const SessionSpeaker = styled.p`
  font-size: ${theme.sizes.xs};
  color: ${theme.colors.textLight};
  font-style: italic;
`;

const ComingSoonBadge = styled.div`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.xs};
  font-weight: ${theme.fonts.weights.semibold};
  display: inline-block;
  margin-left: 0.5rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`;

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
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
  };  const upcomingEvents = [
    {
      title: '5-day Faculty Development Program on Recent Trends in Quantum Computing',
      description: 'Organized by Department of Computer Science & Engineering, Centre of Excellence for Quantum Computing, in collaboration with HRDC IEM-UEM Group, Kolkata. An intensive faculty development program designed to enhance understanding of quantum computing fundamentals, recent advances, and practical applications.',
      date: 'December 2-6, 2024',
      time: '3:30 PM – 5:00 PM (Dec 2), 4:00 PM - 5:00 PM IST (Dec 3-6)',
      location: 'Institute of Engineering & Management, Gurukul Building, Sector – V, Salt Lake Electronics Complex, Kolkata - 700 091',
      capacity: 'Faculty Members',
      type: 'Faculty Development Program',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #5BA0F2 100%)',
      icon: '🎓',
      isFeatured: true,
      isCompleted: true,
      registrationFee: 'No Registration Fee',
      convenor: 'Prof. Dr. Moutushi Singh, HoD, Department of Computer Science & Engineering, IEM',
      speakers: [
        {
          name: 'Dr. Saikat Basu',
          title: 'Quantum Computing Research Lead',
          affiliation: 'LTIMindtree',
          image: '/assets/saikat.jpeg',
          topic: 'Recent Trends in Quantum Computing'
        },
        {
          name: 'Dr. Ritajit Majumdar',
          title: 'Research Scientist',
          affiliation: 'IBM',
          image: '/assets/ritajit.jpeg',
          topic: 'IBM Quantum Computing Platform'
        },
        {
          name: 'Dr. Mrityunjay Ghosh',
          title: 'Quantum Computing Principal',
          affiliation: 'HCL Technologies',
          image: '/assets/mrityunjay.jpeg',
          topic: 'Industry Applications of Quantum Computing'
        },
        {
          name: 'Dr. Srinivasa Prasannaa V',
          title: 'Researcher',
          affiliation: 'CQUERE, TCG CREST',
          image: '/assets/srinivasan.jpg',
          topic: 'Quantum Research at CQUERE'
        },
        {
          name: 'Dr. Sanjay Chakraborty',
          title: 'Researcher',
          affiliation: 'Linköping University, Sweden',
          image: '/assets/sanjay.jpeg',
          topic: 'International Quantum Research Perspectives'
        },
        {
          name: 'Dr. Prithwineel Paul',
          title: 'Associate Professor',
          affiliation: 'IEM Kolkata',
          image: '/assets/prithwineel.png',
          topic: 'Quantum Computing Education and Research'
        }
      ],
      organizingCommittee: [
        'Dr. Prithwineel Paul',        'Dr. Sukanya Mukherjee', 
        'Prof. Subhashri Roy',
        'Prof. Sayonee Chatterjee'
      ]
    }
  ];

  const pastEvents = [];

  const tabs = [
    { key: 'featured', label: 'Featured Event', count: 1 }
  ];

  const getCurrentEvents = () => {
    return upcomingEvents;
  };

  const featuredEvent = upcomingEvents[0];

  return (
    <EventsContainer>
      <Helmet>
        <title>Events - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Join our quantum computing conferences, workshops, webinars, and educational events to advance your knowledge and connect with experts" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Events & Programs
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community of quantum computing enthusiasts through workshops, 
            conferences, and educational programs
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Featured Event</SectionTitle>          <FeaturedEvent
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FeaturedTitle>{featuredEvent.title}</FeaturedTitle>
            <FeaturedDescription>{featuredEvent.description}</FeaturedDescription>            <FeaturedMeta>
              <div className="meta-group">
                <FiCalendar />
                <div>
                  <div className="meta-label">Date</div>
                  <div className="meta-value">{featuredEvent.date}</div>
                </div>
              </div>
              <div className="meta-group">
                <FiClock />
                <div>
                  <div className="meta-label">Time</div>
                  <div className="meta-value">{featuredEvent.time}</div>
                </div>
              </div>
              <div className="meta-group">
                <FiMapPin />
                <div>
                  <div className="meta-label">Venue</div>
                  <div className="meta-value">{featuredEvent.location}</div>
                </div>
              </div>
              <div className="meta-group">
                <FiUsers />
                <div>
                  <div className="meta-label">Registration Fee</div>
                  <div className="meta-value">{featuredEvent.registrationFee}</div>
                </div>
              </div>
            </FeaturedMeta>

            {featuredEvent.convenor && (
              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #4A90E2' }}>
                <h4 style={{ color: '#4A90E2', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Convenor</h4>
                <p style={{ margin: 0, color: '#333' }}>{featuredEvent.convenor}</p>
              </div>
            )}

            {featuredEvent.organizingCommittee && (
              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #FF6B35' }}>
                <h4 style={{ color: '#FF6B35', marginBottom: '1rem', fontSize: '1.1rem' }}>Organizing Committee</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {featuredEvent.organizingCommittee.map((member, index) => (
                    <p key={index} style={{ margin: 0, color: '#333', fontSize: '0.95rem' }}>• {member}</p>
                  ))}
                </div>
              </div>
            )}

            {featuredEvent.speakers && (
              <SpeakersSection>
                <SpeakersTitle>Distinguished Speakers</SpeakersTitle>
                <SpeakersGrid>
                  {featuredEvent.speakers.map((speaker, index) => (
                    <SpeakerCard key={index}>
                      <SpeakerImage src={speaker.image} />
                      <SpeakerName>{speaker.name}</SpeakerName>
                      <SpeakerTitle>{speaker.title}</SpeakerTitle>
                      <SpeakerAffiliation>{speaker.affiliation}</SpeakerAffiliation>
                      <SpeakerTopic>{speaker.topic}</SpeakerTopic>
                    </SpeakerCard>
                  ))}
                </SpeakersGrid>
              </SpeakersSection>
            )}

            {featuredEvent.schedule && (
              <ScheduleSection>
                <ScheduleTitle>Program Schedule</ScheduleTitle>
                <ScheduleGrid>
                  {featuredEvent.schedule.map((day, index) => (
                    <DayCard key={index}>
                      <DayTitle>{day.day}</DayTitle>
                      <DayDate>{day.date}</DayDate>
                      <SessionList>
                        {day.sessions.map((session, sessionIndex) => (
                          <SessionItem key={sessionIndex}>
                            <SessionTime>{session.time}</SessionTime>
                            <SessionTitle>{session.title}</SessionTitle>
                            <SessionSpeaker>by {session.speaker}</SessionSpeaker>
                          </SessionItem>
                        ))}
                      </SessionList>
                    </DayCard>
                  ))}
                </ScheduleGrid>
              </ScheduleSection>
            )}            <EventActions>
              {featuredEvent.isCompleted ? (
                <ActionButton className="completed" disabled>
                  Event Completed
                </ActionButton>
              ) : (
                <ActionButton href={featuredEvent.registrationLink || "#"} className="primary" target="_blank" rel="noopener noreferrer">
                  Register Now <FiArrowRight />
                </ActionButton>
              )}
              <ActionButton href="#" className="secondary">
                Download Brochure <FiExternalLink />
              </ActionButton>
            </EventActions>
          </FeaturedEvent>
        </Container>
      </Section>      <Section>
        <Container>
          <SectionTitle>Upcoming Events</SectionTitle>
          <SectionDescription>
            More exciting quantum computing events are being planned. 
            Stay tuned for announcements!
          </SectionDescription>
          
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 0', 
            background: '#f8f9fa', 
            borderRadius: '16px',
            margin: '2rem 0'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              opacity: 0.7
            }}>
              🔮
            </div>
            <h3 style={{ 
              color: '#4A90E2', 
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              More Events Coming Soon
            </h3>
            <p style={{ 
              color: '#666', 
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We're working on exciting new workshops, conferences, and educational programs. 
              Follow us for updates on upcoming quantum computing events.
            </p>
          </div>
        </Container>
      </Section>
    </EventsContainer>
  );
};

export default Events;
