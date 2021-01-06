/* eslint-disable eqeqeq */
import styled from 'styled-components';
import css from '@styled-system/css';

export const HeaderContainer = styled.div`
  ${props => css({
    top: '0',
    zIndex: '100',
    width: '100%',
    height: ['51px', '60px', '60px', '4.14vw'],
    display: 'flex',
    position: props.active ? ['sticky', 'sticky'] : ['sticky', 'static'],
    justifyContent: ['flex-end', 'space-between'],
    alignItems: 'center',
    '.logo': {
      visibility: ['hidden', props.active ? 'visible' : 'hidden'],
    }
  })}
`;

export const Overlay = styled.div`
  ${(props) => css({
    top: '0',
    zIndex: '9',
    width: '100%',
    minHeight: ['100%', props.active ? '100%' : '0'],
    position: 'absolute',
    transition: 'min-height .5s',
    background: [props.theme.colors.black],
  })}
`;

export const Logo = styled.div`
  ${(props) => css({
    width: ['40px', '40px', '40px', '2.72vw'],
    height: ['40px', '40px', '40px', '2.72vw'],
    zIndex: '10',
    position: 'relative',
    backgroundSize: 'contain',
    display: ['none', 'block'],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(/svg/logo.svg)`,
    marginLeft: ['0', '171px', '171px', '11.79vw'],
  })}
`;

export const ListOptions = styled.ul`
  ${css({
    zIndex: '10',
    display: ['none', 'flex'],
    alignItems: 'center',
    paddingRight: ['0', '171px', '171px', '11.79vw'],
  })}
`;

export const Option = styled.li`
  ${(props) => css({
    cursor: 'pointer',
    color: props.active ? props.theme.colors.gold : 'white',
    fontSize: ['11px', '14px', '14px', '0.96vw'],
    paddingRight: ['17px', '20px', '20px', '1.38vw'],
    fontFamily: props.theme.fonts.robotoRegular,
    transition: 'font-size .1s',
    ':hover': {
      color: props.theme.colors.gold,
    }
  })}
`;
