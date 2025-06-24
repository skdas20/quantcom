import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiSearch, FiCalendar, FiUser, FiExternalLink, FiDownload, FiFilter, FiClock } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { useInView } from 'react-intersection-observer';

const PublicationsContainer = styled.div`
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
  background: white;
  
  &:nth-child(even) {
    background: 
      radial-gradient(circle at 70% 30%, rgba(74, 144, 226, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
      ${theme.colors.backgroundLight};
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(74, 144, 226, 0.1);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(74, 144, 226, 0.15);
    border-color: rgba(74, 144, 226, 0.3);
  }
  
  .stat-number {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: ${theme.fonts.weights.bold};
    background: linear-gradient(135deg, #4A90E2 0%, #FF6B35 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: ${theme.colors.textLight};
    font-weight: ${theme.fonts.weights.medium};
  }
`;

const FilterSection = styled.div`
  background: ${theme.colors.backgroundLight};
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: 3rem;
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  align-items: end;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SearchBox = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 2px solid #e0e0e0;
    border-radius: ${theme.borderRadius.base};
    font-size: ${theme.sizes.base};
    transition: border-color ${theme.transitions.fast};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.textLight};
  }
`;

const FilterSelect = styled.select`
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.base};
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.base};
  font-weight: ${theme.fonts.weights.medium};
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const PublicationsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PublicationCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  border-left: 4px solid ${theme.colors.primary};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const PublicationType = styled.span`
  display: inline-block;
  background: ${props => props.bgColor || theme.colors.gradientLight};
  color: ${props => props.color || theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.semibold};
  margin-bottom: 1rem;
`;

const PublicationTitle = styled.h3`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const AuthorsList = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: 0.75rem;
  font-size: ${theme.sizes.base};
  
  .author-highlight {
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.weights.medium};
  }
`;

const PublicationMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  font-size: ${theme.sizes.sm};
  color: ${theme.colors.textLighter};
  flex-wrap: wrap;
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const PublicationAbstract = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PublicationActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  text-decoration: none;
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
  
  &.secondary {
    border-color: ${theme.colors.textLight};
    color: ${theme.colors.textLight};
    
    &:hover {
      background: ${theme.colors.textLight};
      color: white;
    }
  }
`;

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  const stats = [
    { number: '15', label: 'Publications' },
    { number: '6', label: 'Journal Papers' },
    { number: '9', label: 'Conference Papers' },
    { number: '105+', label: 'Years Experience' }
  ];
  const publications = [
    {
      type: 'Journal',
      title: 'Deep Space Insights: Machine Learning Revolutionizing Astrophysical Discoveries',
      authors: ['Samya Dutta', 'Prithwineel Paul'],
      venue: 'EPJ Web of Conferences, Volume 325, Pages 01012, EDP Sciences',
      year: '2025',
      abstract: 'This paper explores the application of machine learning techniques in astrophysical research, focusing on deep space data analysis and astronomical discovery processes.',
      citedBy: 0,
      bgColor: 'rgba(74, 144, 226, 0.1)',
      color: '#4A90E2',
      link: 'https://www.epj-conferences.org/articles/epjconf/abs/2025/10/epjconf_iemphys2025_01012/epjconf_iemphys2025_01012.html',
      published: 'May 5, 2025'
    },
    {
      type: 'Journal',
      title: 'Solving the SAT problem using spiking neural P systems with coloured spikes and division rules',
      authors: ['Prithwineel Paul', 'Petr Sosík'],
      venue: 'Journal of Membrane Computing, Volume 6, Issue 3, Pages 222-233, Springer Nature Singapore',
      year: '2024',
      abstract: 'This work presents a novel approach to solving the Boolean satisfiability problem using spiking neural P systems enhanced with coloured spikes and division rules.',
      citedBy: 0,
      bgColor: 'rgba(255, 107, 53, 0.1)',
      color: '#FF6B35',
      link: 'https://ouci.dntb.gov.ua/en/works/4Kzyagg7/'
    },
    {
      type: 'Journal',
      title: 'A survey on learning models of spiking neural membrane systems',
      authors: ['Prithwineel Paul', 'Petr Sosík', 'Lucie Ciencialová'],
      venue: 'Natural Computing (Accepted)',
      year: '2024',
      abstract: 'A comprehensive survey examining various learning models and mechanisms in spiking neural membrane systems.',
      citedBy: 0,
      bgColor: 'rgba(23, 162, 184, 0.1)',
      color: '#17A2B8',
      link: 'https://arxiv.org/abs/2403.18609',
      pdfLink: 'http://arxiv.org/pdf/2403.18609.pdf',
      status: 'Submitted March 27, 2024'
    },
    {
      type: 'Journal',
      title: 'Wireless spiking neural P systems',
      authors: ['David Orellana-Martín', 'Francis George C. Cabarle', 'Prithwineel Paul', 'Xiangxiang Zeng', 'Rudolf Freund'],
      venue: 'Journal of Membrane Computing (2025)',
      year: '2025',
      abstract: 'This paper introduces wireless spiking neural P systems, extending the computational capabilities of membrane computing systems.',
      citedBy: 0,
      bgColor: 'rgba(40, 167, 69, 0.1)',
      color: '#28A745'
    },
    {
      type: 'Journal',
      title: 'Solving the SAT problem using spiking neural P systems with structural plasticity and pre-computed resources',
      authors: ['Prithwineel Paul', 'Francis George C. Cabarle'],
      venue: 'Journal of Membrane Computing (Accepted)',
      year: '2024',
      abstract: 'This work presents an enhanced approach to SAT problem solving using spiking neural P systems with adaptive structural plasticity.',
      citedBy: 0,
      bgColor: 'rgba(111, 66, 193, 0.1)',
      color: '#6F42C1'
    },
    {
      type: 'Journal',
      title: 'Robot Motion Planning with Parallel 8-directional Array P Systems',
      authors: ['Williams Sureshkumar', 'M Sudhakar', 'Narayanan Prasanth', 'Prithwineel Paul', 'Gexiang Zhang'],
      venue: 'International Journal of Unconventional Computing (Accepted)',
      year: '2024',
      abstract: 'This paper presents a novel approach to robot motion planning using parallel 8-directional array P systems.',
      citedBy: 0,
      bgColor: 'rgba(220, 53, 69, 0.1)',
      color: '#DC3545'
    },
    {
      type: 'Conference',
      title: 'Exploring Social Media Chatter During a Rumoring Phenomenon',
      authors: ['Anjan Pal', 'Soumadip Ghosh', 'Prithwineel Paul'],
      venue: '2025 19th International Conference on Ubiquitous Information Management and Communication (IMCOM)',
      year: '2025',
      abstract: 'This study explores social media patterns and behaviors during rumoring phenomena, analyzing communication dynamics.',
      citedBy: 0,
      bgColor: 'rgba(74, 144, 226, 0.1)',
      color: '#4A90E2'
    },
    {
      type: 'Conference',
      title: 'A Comparative Study of LSTM Models on Sentiment Analysis',
      authors: ['Ritabrata Roy Choudhury', 'Soumik Dey', 'Prithwineel Paul'],
      venue: '2024 6th International Conference on Computational Intelligence and Networks (CINE)',
      year: '2024',
      abstract: 'A comparative analysis of different LSTM architectures for sentiment analysis tasks.',
      citedBy: 0,
      bgColor: 'rgba(255, 107, 53, 0.1)',
      color: '#FF6B35'
    },
    {
      type: 'Conference',
      title: 'Graph-Based Approaches in Cybersecurity: A Comprehensive Survey',
      authors: ['Uttaran Ghosh', 'Aditya Paul', 'Darothi Sarkar', 'Monalisa Dey', 'Prithwineel Paul'],
      venue: 'International Conference on Smart Systems and Wireless Communication',
      year: '2024',
      abstract: 'A comprehensive survey of graph-based methodologies and their applications in cybersecurity.',
      citedBy: 0,
      bgColor: 'rgba(40, 167, 69, 0.1)',
      color: '#28A745'
    },
    {
      type: 'Conference',
      title: 'Detection of Brain Tumor Using U-Net Model Approach',
      authors: ['Arunima Patra', 'Krishnangshu Paul', 'Prithwineel Paul'],
      venue: 'International Conference on Smart Systems and Wireless Communication',
      year: '2024',
      abstract: 'This paper presents a U-Net based approach for automated brain tumor detection in medical imaging.',
      citedBy: 0,
      bgColor: 'rgba(111, 66, 193, 0.1)',
      color: '#6F42C1'
    },
    {
      type: 'Book Chapter',
      title: 'Advances in Brain Tumor Detection and Localization: A Comprehensive Survey',
      authors: ['Krishnangshu Paul', 'Arunima Patra', 'Prithwineel Paul'],
      venue: 'Intelligent Data Analytics for Bioinformatics and Biomedical Systems, Wiley',
      year: '2024',
      abstract: 'A comprehensive survey of advances in brain tumor detection and localization techniques.',
      citedBy: 0,
      bgColor: 'rgba(23, 162, 184, 0.1)',
      color: '#17A2B8'
    },
    {
      type: 'Conference',
      title: 'Deep Space Insights: Machine Learning Revolutionizing Astrophysical Discoveries',
      authors: ['Samya Dutta', 'Prithwineel Paul'],
      venue: 'IRTM 2024',
      year: '2024',
      abstract: 'Conference presentation on machine learning applications in astrophysical research.',
      citedBy: 0,
      bgColor: 'rgba(74, 144, 226, 0.1)',
      color: '#4A90E2'
    },
    {
      type: 'Conference',
      title: 'Grundy Chromatic Number of Word-Representable Graphs',
      authors: ['Uttaran Ghosh', 'Prithwineel Paul'],
      venue: 'IRTM 2024',
      year: '2024',
      abstract: 'This paper explores the Grundy chromatic number properties of word-representable graphs.',
      citedBy: 0,
      bgColor: 'rgba(255, 107, 53, 0.1)',
      color: '#FF6B35'
    },
    {
      type: 'Conference',
      title: 'Lung Pneumonia Detection Using U-Net MobileNet',
      authors: ['Arunima Patra', 'Krishnangshu Paul', 'Prithwineel Paul'],
      venue: 'IRTM 2024',
      year: '2024',
      abstract: 'A lightweight approach to lung pneumonia detection using U-Net and MobileNet architectures.',
      citedBy: 0,
      bgColor: 'rgba(40, 167, 69, 0.1)',
      color: '#28A745'
    },    {
      type: 'Conference',
      title: 'Breast Cancer Detection Using U-Net Attention Gate',
      authors: ['Krishnangshu Paul', 'Arunima Patra', 'Prithwineel Paul'],
      venue: 'IRTM 2024',
      year: '2024',
      abstract: 'An attention-based U-Net approach for improved breast cancer detection in medical imaging.',
      citedBy: 0,
      bgColor: 'rgba(111, 66, 193, 0.1)',
      color: '#6F42C1'
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = yearFilter === 'all' || pub.year === yearFilter;
    const matchesType = typeFilter === 'all' || pub.type.toLowerCase() === typeFilter;
    
    return matchesSearch && matchesYear && matchesType;
  });

  return (
    <PublicationsContainer>
      <Helmet>
        <title>Publications - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Explore our research publications, journal papers, conference proceedings, and patents in quantum computing" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Publications
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our research contributions and scholarly publications advancing 
            the field of quantum computing
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <StatsRow>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatCard>
            ))}
          </StatsRow>

          <FilterSection>
            <FilterRow>
              <SearchBox>
                <FiSearch />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchBox>
              
              <FilterSelect
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </FilterSelect>
              
              <FilterSelect
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="journal">Journal</option>
                <option value="conference">Conference</option>
                <option value="patent">Patent</option>
              </FilterSelect>
            </FilterRow>
          </FilterSection>

          <PublicationsList
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredPublications.map((pub, index) => (
              <PublicationCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <PublicationType bgColor={pub.bgColor} color={pub.color}>
                  {pub.type}
                </PublicationType>
                
                <PublicationTitle>{pub.title}</PublicationTitle>
                
                <AuthorsList>
                  {pub.authors.map((author, idx) => (
                    <span key={idx} className="author-highlight">
                      {author}{idx < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </AuthorsList>
                  <PublicationMeta>
                  <div className="meta-item">
                    <FiCalendar />
                    {pub.venue} • {pub.year}
                  </div>
                  {pub.published && (
                    <div className="meta-item">
                      Published: {pub.published}
                    </div>
                  )}
                  {pub.status && (
                    <div className="meta-item">
                      Status: {pub.status}
                    </div>
                  )}
                  {pub.citedBy > 0 && (
                    <div className="meta-item">
                      Cited by {pub.citedBy}
                    </div>
                  )}
                </PublicationMeta>
                
                <PublicationAbstract>
                  {pub.abstract}
                </PublicationAbstract>
                  <PublicationActions>
                  {pub.link && (
                    <ActionButton href={pub.link} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                      View Publication
                    </ActionButton>
                  )}
                  {pub.pdfLink && (
                    <ActionButton href={pub.pdfLink} target="_blank" rel="noopener noreferrer">
                      <FiDownload />
                      Download PDF
                    </ActionButton>
                  )}
                  {!pub.link && !pub.pdfLink && (
                    <ActionButton href="#" className="secondary">
                      <FiClock />
                      Coming Soon
                    </ActionButton>
                  )}
                </PublicationActions>
              </PublicationCard>
            ))}
          </PublicationsList>

          {filteredPublications.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: theme.colors.textLight }}>
              No publications found matching your search criteria.
            </div>
          )}
        </Container>
      </Section>
    </PublicationsContainer>
  );
};

export default Publications;
