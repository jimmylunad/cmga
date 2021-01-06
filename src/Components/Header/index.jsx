import React, { useEffect, useState } from 'react';
import { HeaderContainer, ListOptions, Option, Overlay, Logo } from './styles';
import ButtonCollapse from './Components/ButtonColapse';

const sections = [
  {
    label: '¿QUIÉNES SOMOS?',
    id: '#quienes-somos'
  },
  {
    label: 'OBJETIVOS',
    id: '#objetivos'
  },
  {
    label: 'TRANSPARENCIA',
    id: '#transparencia'
  },
  {
    label: 'CÓMO PARTICIPAR',
    id: '#como-participar'
  },
  {
    label: 'CONTÁCTANOS',
    id: '#contactanos'
  },
];

const Header = () => {
  const [sectionsPosition, setSectionsPosition] = useState({})
  const [windowTopPosition, setWindowTopPosition] = useState(0);
  const [resize, setResize] = useState(0);

  const getSectionsPosition = () => {
    const arrayPositions = {};
    sections.forEach(e => {
      arrayPositions[e.id.substring(1)] = {
        distanceToTop: Math.floor(document.getElementById(e.id.substring(1)).offsetParent.offsetTop +
          document.getElementById(e.id.substring(1)).offsetTop),
        lowerLimit: Math.floor(document.getElementById(e.id.substring(1)).offsetParent.offsetTop + 
          document.getElementById(e.id.substring(1)).offsetParent.offsetHeight)
      }
    });
    setSectionsPosition(arrayPositions);
  };

  const onScroll = () => {
    setWindowTopPosition(window.pageYOffset + (window.pageYOffset * 0.05));
  };

  useEffect(() => {
    getSectionsPosition();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => setResize(window.innerWidth));
    return function cleanupListener() {
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('resize', () => setResize(window.innerWidth));
    };
  }, [resize]);

  const handleActivate = (idSection) => {
    if (sectionsPosition[idSection]) {
      return (
        windowTopPosition >= sectionsPosition[idSection].distanceToTop
        && windowTopPosition <= sectionsPosition[idSection].lowerLimit
      );
    }
  }

  return (
    <HeaderContainer
      active={
        sectionsPosition['quienes-somos'] 
        && windowTopPosition >= sectionsPosition['quienes-somos'].distanceToTop
      }
    >
      <Overlay active={
        sectionsPosition['quienes-somos'] 
        && windowTopPosition >= sectionsPosition['quienes-somos'].distanceToTop
      } />
      <Logo className="logo" />
      <ListOptions>
        {sections.map((e, i) => (
          <Option 
            key={i} 
            active={handleActivate(e.id.substring(1))}
            onClick={() => window.scrollTo( 0, sectionsPosition[e.id.substring(1)].distanceToTop )}
          >
            {e.label}
          </Option>
        ))}
      </ListOptions>
      <ButtonCollapse 
        sections={sections} 
        handleActivate={handleActivate}
        sectionsPosition={sectionsPosition}
      />
    </HeaderContainer>
  );
};

export default Header;
