import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { theme } from '../../styles/theme';

// Advanced Keyframes
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`;

const pulse = keyframes`
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.4; transform: scale(1); }
`;

const quantumWave = keyframes`
  0% { transform: rotateY(0deg) rotateX(0deg); opacity: 0.6; }
  25% { transform: rotateY(90deg) rotateX(45deg); opacity: 1; }
  50% { transform: rotateY(180deg) rotateX(90deg); opacity: 0.8; }
  75% { transform: rotateY(270deg) rotateX(135deg); opacity: 1; }
  100% { transform: rotateY(360deg) rotateX(180deg); opacity: 0.6; }
`;

const particleOrbit = keyframes`
  0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
  padding-top: 80px;
  
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

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  z-index: 3;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: ${theme?.fonts?.weights?.bold || 700};
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 20px rgba(74, 144, 226, 0.5);
  
  .highlight {
    background: linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${pulse} 3s ease-in-out infinite;
  }
  
  .quantum-text {
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, transparent, #4A90E2, #FFD700, #FF6B35, transparent);
      animation: ${quantumWave} 4s linear infinite;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${theme.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 500px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #4A90E2, #FFD700);  color: #1a1a2e;
  padding: 1rem 2rem;
  border-radius: ${theme?.borderRadius?.lg || '1rem'};
  font-weight: ${theme?.fonts?.weights?.semibold || 600};
  transition: all ${theme?.transitions?.base || '0.3s ease-in-out'};
  box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(74, 144, 226, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    transition: transform ${theme.transitions.fast};
  }
  
  &:hover svg {
    transform: translateX(4px) rotate(45deg);
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border: 2px solid rgba(255, 215, 0, 0.5);  border-radius: ${theme?.borderRadius?.lg || '1rem'};
  font-weight: ${theme?.fonts?.weights?.semibold || 600};
  transition: all ${theme?.transitions?.base || '0.3s ease-in-out'};
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #FFD700;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  z-index: 1;
`;

const Quantum3DContainer = styled(motion.div)`
  width: 500px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 350px;
    height: 350px;
  }
`;

const QuantumSphere = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin: -100px 0 0 -100px;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(74, 144, 226, 0.8), transparent 70%),
    radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.6), transparent 70%);
  box-shadow: 
    0 0 50px rgba(74, 144, 226, 0.5),
    inset 0 0 30px rgba(255, 215, 0, 0.3);
  animation: ${quantumWave} 8s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(74, 144, 226, 0.5),
      transparent,
      rgba(255, 215, 0, 0.5),
      transparent
    );
    animation: ${spin} 4s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    background: url('/assets/Logo.png') center center / contain no-repeat;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const OrbitRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid ${props => props.color || 'rgba(74, 144, 226, 0.4)'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: ${props => props.color || '#4A90E2'};
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 15px currentColor;
    animation: ${particleOrbit} ${props => props.duration || '10s'} linear infinite;
  }
`;

const QuantumParticle = styled(motion.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${props => props.color || '#FFD700'};
  border-radius: 50%;
  box-shadow: 0 0 10px currentColor;
  animation: ${float} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const BackgroundElement = styled(motion.div)`
  position: absolute;
  background: url('/assets/3d39c5fb-2602-4e7d-8bed-a0962b9f0833.png') center center / contain no-repeat;
  opacity: 0.1;
  filter: blur(2px);
  animation: ${pulse} 8s ease-in-out infinite;
`;

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            IEM Centre of Excellence for{' '}
            <span className="highlight quantum-text">Quantum Computing</span>
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering the future of quantum technologies through cutting-edge research, 
            innovation, and academic excellence.
          </HeroSubtitle>
            <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PrimaryButton to="/research">
              Explore Research <FiArrowRight />
            </PrimaryButton>
          </ButtonGroup>
        </HeroText>

        <HeroVisual>
          <Quantum3DContainer
            animate={{
              rotateY: mousePosition.x * 10,
              rotateX: mousePosition.y * 10,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Central Quantum Sphere */}
            <QuantumSphere />
            
            {/* Orbit Rings */}
            <OrbitRing 
              style={{ width: '300px', height: '300px' }}
              color="rgba(74, 144, 226, 0.4)"
              duration="8s"
            />
            <OrbitRing 
              style={{ width: '400px', height: '400px' }}
              color="rgba(255, 215, 0, 0.3)"
              duration="12s"
            />
            <OrbitRing 
              style={{ width: '500px', height: '500px' }}
              color="rgba(255, 107, 53, 0.2)"
              duration="16s"
            />
            
            {/* Floating Particles */}
            <QuantumParticle 
              style={{ top: '20%', left: '20%' }}
              color="#4A90E2"
              duration="3s"
              delay="0s"
            />
            <QuantumParticle 
              style={{ top: '80%', right: '20%' }}
              color="#FFD700"
              duration="4s"
              delay="1s"
            />
            <QuantumParticle 
              style={{ top: '50%', right: '10%' }}
              color="#FF6B35"
              duration="5s"
              delay="2s"
            />
            <QuantumParticle 
              style={{ bottom: '20%', left: '10%' }}
              color="#4A90E2"
              duration="3.5s"
              delay="0.5s"
            />
            
            {/* Background Elements */}
            <BackgroundElement 
              style={{ 
                top: '10%', 
                left: '10%', 
                width: '100px', 
                height: '100px' 
              }}
            />
            <BackgroundElement 
              style={{ 
                bottom: '10%', 
                right: '10%', 
                width: '80px', 
                height: '80px' 
              }}
            />
          </Quantum3DContainer>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
