import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { theme } from '../../styles/theme';

// Quantum-themed animations
const quantumGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(74, 144, 226, 0.3); }
  100% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); }
`;

const particleFloat = keyframes`
  0% { transform: translateY(0px); opacity: 0.6; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.6; }
`;

const FooterContainer = styled.footer`
  background: 
    radial-gradient(circle at 20% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  padding: 4rem 0 2rem;
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #4A90E2, #FFD700, #FF6B35, transparent);
    animation: ${quantumGlow} 4s ease-in-out infinite;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 2;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: ${theme.borderRadius.base};
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
    animation: ${particleFloat} 3s ease-in-out infinite;
  }
  
  .logo-text {
    font-size: ${theme.sizes.xl};
    font-weight: ${theme.fonts.weights.bold};
    background: linear-gradient(45deg, #4A90E2, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FooterSection = styled.div`
  h3 {
    background: linear-gradient(45deg, #FFD700, #4A90E2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: ${theme.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: rgba(255, 255, 255, 0.7);
      transition: all ${theme.transitions.fast};
      position: relative;
      
      &:hover {
        color: #FFD700;
        text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: linear-gradient(90deg, #4A90E2, #FFD700);
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    
    svg {
      color: #FFD700;
      font-size: 1.1rem;
      flex-shrink: 0;
      margin-top: 2px;
      filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(74, 144, 226, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 50%;
    color: #4A90E2;
    transition: all ${theme.transitions.fast};
    backdrop-filter: blur(10px);
    
    &:hover {
      background: linear-gradient(45deg, #4A90E2, #FFD700);
      color: #1a1a2e;
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 215, 0, 0.2);
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
  }
  
  p {
    margin: 0;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src="/assets/Logo.png" alt="QuantCom Logo" />
            <span className="logo-text">QuantCom</span>
          </FooterLogo>          <h3>About Our Centre</h3>
          <p>
            Advancing quantum computing technologies through cutting-edge research and innovation.
          </p>
          <SocialLinks>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/research">Research Areas</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Research Focus</h3>
          <FooterLinks>
            <li><a href="#quantum-algorithms">Quantum Algorithms</a></li>
            <li><a href="#quantum-ml">Quantum Machine Learning</a></li>
            <li><a href="#quantum-crypto">Quantum Cryptography</a></li>
            <li><a href="#quantum-sensing">Quantum Sensing</a></li>
            <li><a href="#quantum-metrology">Quantum Metrology</a></li>
          </FooterLinks>
        </FooterSection>        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <div className="contact-item">
              <FiMapPin />
              <span>Institute of Engineering & Management, Gurukul Campus<br />2nd Floor, Room No: YTM1<br />Kolkata, India</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>prithwineel.paul@iem.edu.in</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>+91 9444553517</span>
            </div>
          </ContactInfo>
        </FooterSection>
      </FooterContent>      <FooterBottom>
        <div className="container">
          <p>&copy; {currentYear} IEM Centre of Excellence for Quantum Computing. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Site developed by{' '}
            <a 
              href="https://www.linkedin.com/in/sumitkumardas-ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#FFD700', 
                textDecoration: 'none',
                borderBottom: '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.borderBottomColor = '#FFD700';
                e.target.style.textShadow = '0 0 8px rgba(255, 215, 0, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.borderBottomColor = 'transparent';
                e.target.style.textShadow = 'none';
              }}
            >
              Sumit Kumar Das
            </a>
          </p>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
