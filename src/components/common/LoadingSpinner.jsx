import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const SpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid rgba(74, 144, 226, 0.1);
  border-top: 3px solid ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LogoSpinner = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  .logo {
    width: ${props => props.size || '32px'};
    height: ${props => props.size || '32px'};
    border-radius: ${theme.borderRadius.base};
    animation: ${pulse} 2s ease-in-out infinite;
    z-index: 2;
  }
  
  .ring {
    position: absolute;
    width: ${props => props.size ? `calc(${props.size} + 16px)` : '48px'};
    height: ${props => props.size ? `calc(${props.size} + 16px)` : '48px'};
    border: 2px solid ${theme.colors.primary};
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${spin} 1.5s linear infinite;
  }
`;

const DotsSpinner = styled.div`
  display: flex;
  gap: 4px;
  
  .dot {
    width: 8px;
    height: 8px;
    background: ${theme.colors.primary};
    border-radius: 50%;
    animation: ${pulse} 1.4s ease-in-out infinite;
    animation-delay: ${props => props.delay || '0s'};
  }
`;

// Simple circular spinner
export const LoadingSpinner = ({ size = '40px' }) => (
  <SpinnerContainer>
    <Spinner size={size} />
  </SpinnerContainer>
);

// Logo-based spinner
export const LogoLoadingSpinner = ({ size = '32px' }) => (
  <LogoSpinner size={size}>
    <div className="ring" />
    <img 
      className="logo"
      src="/assets/Logo.png" 
      alt="Loading..." 
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </LogoSpinner>
);

// Dots spinner
export const DotsLoadingSpinner = () => (
  <DotsSpinner>
    <div className="dot" style={{ animationDelay: '0s' }} />
    <div className="dot" style={{ animationDelay: '0.2s' }} />
    <div className="dot" style={{ animationDelay: '0.4s' }} />
  </DotsSpinner>
);

// Default export
const LoadingComponents = {
  Spinner: LoadingSpinner,
  LogoSpinner: LogoLoadingSpinner,
  DotsSpinner: DotsLoadingSpinner
};

export default LoadingComponents;
