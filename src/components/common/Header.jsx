import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { theme } from '../../styles/theme';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => {
    if (props.isHomePage) {
      return props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)';
    }
    return props.scrolled ? 'rgba(26, 26, 46, 0.95)' : 'rgba(26, 26, 46, 0.9)';
  }};  backdrop-filter: blur(20px);
  border-bottom: ${props => {
    if (props.isHomePage) {
      return `1px solid ${props.scrolled ? 'rgba(74, 144, 226, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`;
    }
    return 'none';
  }};
  transition: all ${theme.transitions.base};
  box-shadow: ${props => {
    if (props.isHomePage) {
      return props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    return props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.2)';
  }};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.sizes.xl};
  color: ${props => props.isHomePage ? theme.colors.primary : 'rgba(255, 255, 255, 0.9)'};
  text-decoration: none;
  transition: all ${theme.transitions.base};
  
  &:hover {
    color: ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
  }
`;

const LogoImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: ${theme.borderRadius.md};
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(74, 144, 226, 0.3));
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 12px rgba(74, 144, 226, 0.5));
  }
  
  // Fallback styling if image fails to load
  &::after {
    content: '⚛';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    font-size: 20px;
    border-radius: ${theme.borderRadius.md};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => {
    if (props.isHomePage) {
      return props.scrolled ? theme.colors.text : 'rgba(255, 255, 255, 0.9)';
    }
    return 'rgba(255, 255, 255, 0.9)';
  }};
  font-weight: ${theme.fonts.weights.medium};
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.base};
  transition: all ${theme.transitions.fast};
  position: relative;
  backdrop-filter: blur(10px);
  
  &:hover {
    color: ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
    background: ${props => props.isHomePage ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 215, 0, 0.2)'};
    transform: translateY(-1px);
  }
  
  &.active {
    color: ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
    background: ${props => props.isHomePage ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 215, 0, 0.25)'};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
      border-radius: 50%;
      box-shadow: 0 0 8px ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.isHomePage ? theme.colors.text : 'rgba(255, 255, 255, 0.9)'};
  cursor: pointer;
  margin-left: auto;
  transition: all ${theme.transitions.fast};
  
  &:hover {
    color: ${props => props.isHomePage ? theme.colors.secondary : '#FFD700'};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.sizes['2xl']};
  font-weight: ${theme.fonts.weights.medium};
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.fast};
  
  &:hover, &.active {
    color: ${theme.colors.primary};
    background: rgba(74, 144, 226, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${theme.colors.text};
  cursor: pointer;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research' },
    { path: '/team', label: 'Team' },
    { path: '/publications', label: 'Publications' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>      <HeaderContainer
        scrolled={isScrolled}
        isHomePage={location.pathname === '/'}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >        <Nav>
          <Logo to="/" isHomePage={location.pathname === '/'}>
            <LogoImage 
              src="/assets/Logo.png" 
              alt="QuantCom Logo"
              onError={(e) => {
                // Fallback to icon if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ 
              display: 'none', 
              width: '40px', 
              height: '40px',
              background: location.pathname === '/' ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)',
              borderRadius: theme.borderRadius.md,
              alignItems: 'center',
              justifyContent: 'center',
              color: location.pathname === '/' ? theme.colors.secondary : 'rgba(255, 255, 255, 0.9)',
              fontSize: '20px'
            }}>
              ⚛
            </div>
            <span>QuantCom</span>
          </Logo>
          
          <NavLinks>            {navItems.map((item) => (
              <li key={item.path}>                <NavLink 
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  scrolled={isScrolled}
                  isHomePage={location.pathname === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>          <MobileMenuButton 
            onClick={() => setIsMobileMenuOpen(true)}
            isHomePage={location.pathname === '/'}
          >
            <FiMenu />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
              <FiX />
            </CloseButton>
            
            {navItems.map((item) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
