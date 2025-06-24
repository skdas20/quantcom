import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes for loading animations
const quantumPulse = keyframes`
  0% { 
    transform: scale(1) rotate(0deg);
    opacity: 0.7;
  }
  50% { 
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
  100% { 
    transform: scale(1) rotate(360deg);
    opacity: 0.7;
  }
`;

const orbitSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 70%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
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

const LogoContainer = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 3rem;
  perspective: 1000px;
  transform-style: preserve-3d;
  z-index: 2;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
  animation: ${quantumPulse} 3s ease-in-out infinite;
  z-index: 3;
`;

const QuantumCore = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(74, 144, 226, 0.6), transparent 70%),
    radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.4), transparent 70%);
  box-shadow: 
    0 0 40px rgba(74, 144, 226, 0.4),
    inset 0 0 20px rgba(255, 215, 0, 0.2);
  animation: ${quantumPulse} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(74, 144, 226, 0.3),
      transparent,
      rgba(255, 215, 0, 0.3),
      transparent
    );
    animation: ${orbitSpin} 3s linear infinite;
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid ${props => props.color || 'rgba(74, 144, 226, 0.4)'};
  border-top-color: ${props => props.topColor || 'rgba(255, 215, 0, 0.8)'};
  border-radius: 50%;
  animation: ${orbitSpin} ${props => props.duration || '2s'} linear infinite;
  transform: translate(-50%, -50%);
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: ${props => props.topColor || '#FFD700'};
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px currentColor;
  }
`;

const LoadingText = styled(motion.h2)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(45deg, #4A90E2, #FFD700, #FF6B35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 20px rgba(74, 144, 226, 0.3);
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4A90E2, #FFD700, #FF6B35, transparent);
    animation: ${fadeInOut} 3s ease-in-out infinite;
  }
`;

const LoadingSubtext = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  text-align: center;
  animation: ${fadeInOut} 2s ease-in-out infinite;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
`;

const LoadingProgress = styled(motion.p)`
  color: rgba(255, 215, 0, 0.9);
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

const ProgressBar = styled.div`
  width: 350px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(74, 144, 226, 0.2);
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.1);
  z-index: 2;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #4A90E2, #FFD700, #FF6B35);
  border-radius: 3px;
  box-shadow: 
    0 0 15px rgba(74, 144, 226, 0.6),
    0 0 30px rgba(255, 215, 0, 0.4);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: ${orbitSpin} 1s linear infinite;
  }
`;

const QuantumParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color || '#4A90E2'};
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
`;

const LoadingScreen = ({ progress = 0 }) => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ['#4A90E2', '#FFD700', '#FF6B35'][Math.floor(Math.random() * 3)],
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 3 + Math.random() * 3
  }));

  const getLoadingMessage = (progress) => {
    if (progress < 20) return "Initializing Quantum Computing Environment...";
    if (progress < 40) return "Loading Quantum Algorithms...";
    if (progress < 60) return "Synchronizing Research Data...";
    if (progress < 80) return "Establishing Quantum Connections...";
    return "Finalizing Quantum Interface...";
  };

  return (
    <LoadingContainer>
      <QuantumParticles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            color={particle.color}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </QuantumParticles>

      <LogoContainer
        initial={{ scale: 0, opacity: 0, rotateY: 180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <QuantumCore />
        <LogoImage src="/assets/Logo.png" alt="QuantCom Logo" />
        
        <OrbitRing 
          style={{ width: '160px', height: '160px' }}
          color="rgba(74, 144, 226, 0.4)"
          topColor="rgba(74, 144, 226, 0.8)"
          duration="3s"
        />
        <OrbitRing 
          style={{ width: '180px', height: '180px' }}
          color="rgba(255, 215, 0, 0.3)"
          topColor="rgba(255, 215, 0, 0.8)"
          duration="4s"
        />
        <OrbitRing 
          style={{ width: '200px', height: '200px' }}
          color="rgba(255, 107, 53, 0.2)"
          topColor="rgba(255, 107, 53, 0.7)"
          duration="5s"
        />
      </LogoContainer>

      <LoadingText
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Quantum Computing Centre
      </LoadingText>

      <LoadingSubtext
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {getLoadingMessage(progress)}
      </LoadingSubtext>

      <LoadingProgress
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {Math.round(progress)}% Complete
      </LoadingProgress>

      <ProgressBar>
        <ProgressFill
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </ProgressBar>
    </LoadingContainer>
  );
};

export default LoadingScreen;
