import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const quantumRipple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(74, 144, 226, 0.05) 0%, 
    rgba(255, 255, 255, 1) 50%, 
    rgba(255, 107, 53, 0.05) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const LoadingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  animation: ${pulse} 2s ease-in-out infinite;
  z-index: 2;
  position: relative;
`;

const RippleRing = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 3px solid ${theme.colors.primary};
  border-radius: 50%;
  animation: ${quantumRipple} 2s ease-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.6;
`;

const OrbitRing = styled.div`
  position: absolute;
  border: 2px solid ${props => props.color || theme.colors.primary};
  border-radius: 50%;
  opacity: 0.3;
  animation: ${rotate} ${props => props.duration || '10s'} linear infinite;
`;

const LoadingText = styled.div`
  text-align: center;
  
  h1 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.text};
    margin-bottom: 0.5rem;
    
    .highlight {
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  
  p {
    font-size: ${theme.sizes.lg};
    color: ${theme.colors.textLight};
    font-weight: ${theme.fonts.weights.medium};
  }
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(74, 144, 226, 0.1);
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${theme.colors.gradient};
  border-radius: ${theme.borderRadius.full};
  transform-origin: left center;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: 
    radial-gradient(circle at 20% 80%, ${theme.colors.primary} 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, ${theme.colors.secondary} 1px, transparent 1px),
    radial-gradient(circle at 40% 40%, ${theme.colors.primary} 0.5px, transparent 0.5px);
  background-size: 60px 60px, 80px 80px, 120px 120px;
  background-position: 0 0, 40px 40px, 20px 20px;
`;

const LoadingPage = ({ progress = 0 }) => {
  return (
    <LoadingContainer>
      <BackgroundPattern />
      
      <LoadingContent
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LogoContainer>
          {/* Ripple effects */}
          <RippleRing delay="0s" />
          <RippleRing delay="0.7s" />
          <RippleRing delay="1.4s" />
          
          {/* Orbital rings */}
          <OrbitRing 
            color={theme.colors.primary}
            duration="8s"
            style={{
              width: '160px',
              height: '160px',
              top: '-20px',
              left: '-20px'
            }}
          />
          <OrbitRing 
            color={theme.colors.secondary}
            duration="12s"
            style={{
              width: '200px',
              height: '200px',
              top: '-40px',
              left: '-40px'
            }}
          />
          
          {/* Main logo */}
          <Logo 
            src="/assets/Logo.png" 
            alt="QuantCom Logo"
            onError={(e) => {
              // Fallback if logo doesn't load
              console.log('Logo failed to load, using fallback');
              e.target.style.display = 'none';
            }}
          />
        </LogoContainer>

        <LoadingText>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="highlight">QuantCom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            IEM Centre of Excellence for Quantum Computing
          </motion.p>
        </LoadingText>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <ProgressBar>
            <ProgressFill
              initial={{ scaleX: 0 }}
              animate={{ scaleX: Math.min(progress, 100) / 100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </ProgressBar>
          
          <LoadingDots>
            <Dot delay="0s" />
            <Dot delay="0.2s" />
            <Dot delay="0.4s" />
          </LoadingDots>
        </motion.div>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingPage;
