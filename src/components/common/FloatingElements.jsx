import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const FloatingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const PulsingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  animation: ${pulse} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  animation: ${float} ${props => props.duration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const FloatingElements = ({ variant = 'quantum', density = 'medium' }) => {
  const elementCount = density === 'low' ? 3 : density === 'high' ? 8 : 5;
  
  const quantumElements = Array.from({ length: elementCount }, (_, i) => (
    <FloatingElement
      key={i}
      duration={`${6 + i * 0.5}s`}
      delay={`${i * 0.8}s`}
      style={{
        width: `${20 + i * 10}px`,
        height: `${20 + i * 10}px`,
        background: `radial-gradient(circle, ${
          i % 3 === 0 ? 'rgba(74, 144, 226, 0.1)' :
          i % 3 === 1 ? 'rgba(255, 107, 53, 0.1)' :
          'rgba(255, 215, 0, 0.1)'
        } 0%, transparent 70%)`,
        border: `1px solid ${
          i % 3 === 0 ? 'rgba(74, 144, 226, 0.2)' :
          i % 3 === 1 ? 'rgba(255, 107, 53, 0.2)' :
          'rgba(255, 215, 0, 0.2)'
        }`,
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      }}
    />
  ));

  const techElements = Array.from({ length: elementCount }, (_, i) => (
    <PulsingElement
      key={i + 10}
      duration={`${4 + i * 0.3}s`}
      delay={`${i * 0.6}s`}
      style={{
        width: `${15 + i * 8}px`,
        height: `${15 + i * 8}px`,
        background: `linear-gradient(135deg, ${
          i % 2 === 0 ? 'rgba(74, 144, 226, 0.08)' : 'rgba(255, 107, 53, 0.08)'
        } 0%, transparent 100%)`,
        border: `1px solid ${
          i % 2 === 0 ? 'rgba(74, 144, 226, 0.15)' : 'rgba(255, 107, 53, 0.15)'
        }`,
        top: `${Math.random() * 70 + 15}%`,
        right: `${Math.random() * 70 + 15}%`,
      }}
    />
  ));

  const geometricElements = Array.from({ length: Math.floor(elementCount / 2) }, (_, i) => (
    <GeometricShape
      key={i + 20}
      duration={`${10 + i}s`}
      delay={`${i * 1.2}s`}
      style={{
        width: `${30 + i * 15}px`,
        height: `${30 + i * 15}px`,
        background: 'transparent',
        border: `2px solid ${
          i % 3 === 0 ? 'rgba(74, 144, 226, 0.1)' :
          i % 3 === 1 ? 'rgba(255, 107, 53, 0.1)' :
          'rgba(255, 215, 0, 0.1)'
        }`,
        borderRadius: i % 2 === 0 ? '50%' : '10px',
        transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)',
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 60 + 20}%`,
      }}
    />
  ));

  return (
    <FloatingContainer>
      {variant === 'quantum' && quantumElements}
      {variant === 'tech' && techElements}
      {variant === 'mixed' && [...quantumElements.slice(0, 3), ...techElements.slice(0, 2), ...geometricElements]}
      {variant === 'geometric' && geometricElements}
    </FloatingContainer>
  );
};

export default FloatingElements;
