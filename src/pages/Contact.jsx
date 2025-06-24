import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter, FiFacebook, FiClock } from 'react-icons/fi';
import { theme } from '../styles/theme';

// Quantum theme animations
const quantumFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const quantumPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(74, 144, 226, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
`;

const quantumRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ContactContainer = styled.div`
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
  
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    right: 10%;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(74, 144, 226, 0.3);
    border-radius: 50%;
    animation: ${quantumFloat} 6s ease-in-out infinite;
  }
  
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
  background: 
    radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.02) 0%, transparent 70%),
    #f8f9fa;
  position: relative;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, transparent, rgba(74, 144, 226, 0.1), transparent);
    border-radius: ${theme.borderRadius.lg};
    z-index: -1;
    animation: ${quantumRotate} 10s linear infinite;
  }
`;

const FormTitle = styled.h3`
  font-size: ${theme.sizes['2xl']};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid rgba(74, 144, 226, 0.2);
    border-radius: ${theme.borderRadius.base};
    font-size: ${theme.sizes.base};
    transition: all ${theme.transitions.fast};
    font-family: inherit;
    background: rgba(255, 255, 255, 0.9);
    
    &:focus {
      outline: none;
      border-color: #4A90E2;
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
      background: white;
    }
    
    &.error {
      border-color: #e74c3c;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: ${theme.sizes.sm};
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #4A90E2 0%, #FF6B35 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fonts.weights.semibold};
  font-size: ${theme.sizes.base};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
    animation: ${quantumPulse} 2s infinite;
    
    &::before {
      left: 100%;
    }
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    animation: none;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InfoSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const InfoTitle = styled.h4`
  font-size: ${theme.sizes.xl};
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: #4A90E2;
    font-size: 1.2rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
  
  .info-content {
    .info-label {
      font-weight: ${theme.fonts.weights.medium};
      color: ${theme.colors.text};
      margin-bottom: 0.25rem;
    }
    
    .info-value {
      color: ${theme.colors.textLight};
      line-height: 1.5;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(74, 144, 226, 0.1);
    border: 1px solid rgba(74, 144, 226, 0.2);
    border-radius: 50%;
    color: #4A90E2;
    transition: all ${theme.transitions.fast};
    
    &:hover {
      background: rgba(74, 144, 226, 0.2);
      color: #4A90E2;
      transform: translateY(-2px);
      border-color: #4A90E2;
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const MapSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  
  .map-placeholder {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
    border: 2px solid rgba(74, 144, 226, 0.2);
    border-radius: ${theme.borderRadius.base};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4A90E2;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .map-text {
    color: ${theme.colors.textLight};
    font-size: ${theme.sizes.base};
  }
`;

const OfficeHours = styled.div`
  .hours-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
    
    .day {
      font-weight: ${theme.fonts.weights.medium};
      color: ${theme.colors.text};
    }
    
    .time {
      color: ${theme.colors.textLight};
    }
  }
`;

// Quantum particles component
const QuantumParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 15%;
    width: 4px;
    height: 4px;
    background: #4A90E2;
    border-radius: 50%;
    animation: ${quantumFloat} 4s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 60%;
    right: 20%;
    width: 6px;
    height: 6px;
    background: #FF6B35;
    border-radius: 50%;
    animation: ${quantumFloat} 5s ease-in-out infinite reverse;
  }
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you! We will get back to you soon.');
    reset();
  };

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact Us - QuantCom | IEM Centre of Excellence for Quantum Computing</title>
        <meta name="description" content="Get in touch with IEM Centre of Excellence for Quantum Computing - contact information, location, and inquiry form" />
      </Helmet>

      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with our team to explore collaborations, discuss research opportunities, 
            or learn more about our quantum computing programs
          </HeroSubtitle>
        </Container>
      </HeroSection>      <Section>
        <QuantumParticles />
        <Container>
          <ContactGrid>
            <ContactForm
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FormTitle>Send us a Message</FormTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    className={errors.name ? 'error' : ''}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    className={errors.email ? 'error' : ''}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="organization">Organization/Institution</label>
                  <input
                    id="organization"
                    type="text"
                    {...register('organization')}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    className={errors.subject ? 'error' : ''}
                    {...register('subject', { required: 'Please select a subject' })}
                  >
                    <option value="">Select a subject</option>
                    <option value="research">Research Collaboration</option>
                    <option value="education">Educational Programs</option>
                    <option value="industry">Industry Partnership</option>
                    <option value="events">Events & Workshops</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    className={errors.message ? 'error' : ''}
                    placeholder="Please provide details about your inquiry..."
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend />
                </SubmitButton>
              </form>
            </ContactForm>

            <ContactInfo
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfoSection>
                <InfoTitle>Contact Information</InfoTitle>                <InfoItem>
                  <FiMapPin />
                  <div className="info-content">
                    <div className="info-label">Address</div>
                    <div className="info-value">
                      Institute of Engineering & Management<br />
                      Gurukul Campus, 2nd Floor<br />
                      Room No: YTM1<br />
                      Kolkata, West Bengal, India
                    </div>
                  </div>
                </InfoItem>

                <InfoItem>
                  <FiPhone />
                  <div className="info-content">
                    <div className="info-label">Phone</div>
                    <div className="info-value">+91 9444553517</div>
                  </div>
                </InfoItem>

                <InfoItem>
                  <FiMail />
                  <div className="info-content">
                    <div className="info-label">Email</div>
                    <div className="info-value">
                      Center-in-Charge: prithwineel.paul@iem.edu.in<br />
                      Convener: moutushi.singh@iem.edu.in<br />
                      General Inquiries: quantum@iem.edu.in
                    </div>
                  </div>
                </InfoItem>

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
              </InfoSection>

              <InfoSection>
                <InfoTitle>Office Hours</InfoTitle>
                <InfoItem>
                  <FiClock />
                  <div className="info-content">
                    <OfficeHours>
                      <div className="hours-item">
                        <span className="day">Monday - Friday</span>
                        <span className="time">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Saturday</span>
                        <span className="time">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Sunday</span>
                        <span className="time">Closed</span>
                      </div>
                    </OfficeHours>
                  </div>
                </InfoItem>
              </InfoSection>

              <MapSection>
                <div className="map-placeholder">🗺️</div>
                <div className="map-text">
                  Located in the heart of Salt Lake City, Kolkata<br />
                  Easy access via public transportation and major highways
                </div>
              </MapSection>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>

      <QuantumParticles />
    </ContactContainer>
  );
};

export default Contact;
