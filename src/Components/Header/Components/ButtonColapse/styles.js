import styled from 'styled-components';
import css from '@styled-system/css';

export const HamburgerButton = styled.div`
  width: 55px;
  height: 55px;
  z-index: 1002;
  cursor: pointer;
  user-select: none;
  padding-top: 18px;
  padding-left: 10px;
  background-color: transparent;

  div {
    :first-child {
      transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
      transform: ${props => props.open ? 'translateY(200%) rotate(45deg)' : ' '};
      background: ${props => props.theme.colors.white};
    }
    :nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      background: ${props => props.theme.colors.white};
    }
    :nth-child(3) {
      transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
      transform: ${props => props.open ? 'translateY(-400%) rotate(-45deg)' : ' '};
      background: ${props => props.theme.colors.white};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 576px) {
    position: absolute;
  }
`;

export const Line = styled.div`
  margin-bottom: 6px;
  border-radius: 2px;
  width:28px;
  height:3px;
  opacity:1;
`;

export const NavRight = styled.div`
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transition: width .5s;
  width: ${props => props.open ? '60%' : '0px'};
  background-color: ${props => props.theme.colors.white};

  @media (min-width: 769px) {
    display: none;
  }
`; 

export const NavElements = styled.ul`
  padding-top: 90px;
`;

export const Option = styled.li`
  ${(props) => css({
    height: ['64px'],
    display: 'flex',
    alignItems: 'center',
    fontWeight: '800',
    whiteSpace: 'nowrap',
    visibility: props.open ? 'visible' : 'hidden',
    color: props.active ? props.theme.colors.gold : 'black',
    fontSize: props.active ? ['15px'] : ['14px'],
    paddingLeft: ['20px'],
    fontFamily: props.theme.fonts.robotoRegular,
    transition: 'font-size .1s',
  })}
`;