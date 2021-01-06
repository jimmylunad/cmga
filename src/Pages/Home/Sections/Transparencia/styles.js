import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const Divider = styled(Grid)`
  ${css({
    left: '0',
    top: ['-51px', '-60px', '-60px', '-4.14vw'],
    height: ['51px', '60px', '60px', '4.14vw'],
    width: '100%',
    position: 'absolute',
  })}
`;

export const TransferenceContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#FCF9EA',
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: 'flex-end',
    paddingTop: ['90px', '107px', '107px', '7.38vw'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-start'],
    paddingTop: ['45px', '107px', '107px', '7.38vw'],
    paddingBottom: ['49px', '70px', '70px', '4.83vw'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      title: {
        color: props.theme.colors.wine,
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        paddingBottom: ['34px', '41px', '41px', '2.82vw'],
        fontFamily: props.theme.fonts.spartanBold,
      },
      paragraph: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      textSlider: {
        color: props.theme.colors.white,
        fontSize: ['34px', '40px', '40px', '2.76vw'],
        position: 'relative',
        zIndex: 11,
        textAlign: 'center',
        fontFamily: props.theme.fonts.spartanLight,
      },
    }
  })}
`;

export const Span = styled.span`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      'spanStadium': {
        fontWeight: '750',
      },
    }
  })}
`;

export const ContainerPartners = styled.div`
  ${css({
    background: '#BAA97C',
    height: ['240px', '240px', '240px', '16.56vw'],
    maxWidth: '100%',
    overflow: 'hidden',
    zIndex: '10',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    transform: 'translate3d(0, 0, 0)',
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);

  animation: moveSlideshow 35s linear infinite; 
  
  &:hover {
    animation-play-state: paused;
  }

  @keyframes moveSlideshow {
  100% { 
    transform: translateX(-50%);  
  }
}
`;

export const Column = styled.div`
  flex: 0 0 auto;
`;

export const Partner = styled.div`
  ${css({
    width: ['80px', '80px', '80px', '5.52vw'],
    height: ['80px', '80px', '80px', '5.52vw'],
  })}
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-size: cover;
  background-image: url(${props => props.img});

  :after {
    content: "";
    position: absolute;
    top: 0;
    right:0;
    width: 100%;
    height: 100%;
    background-color: #BAA97C;
    opacity: .6;
    z-index: 2;
    transition: opacity .3s;
  }
  :hover {
    :after {
      opacity: 0;
    }
  }
`;
