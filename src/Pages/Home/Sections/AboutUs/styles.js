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

export const AboutUsContainer = styled(Grid)`
  ${css({
    position: 'relative',
    backgroundColor: '#FCF9EA',
  })}
`;

export const ContentLeft = styled(Grid)`
  ${css({
    justifyContent: 'flex-end',
    paddingTop: ['70px', '83px', '83px', '5.7vw'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: ['center', 'flex-start'],
    paddingTop: ['49px', '70px', '70px', '4.83vw'],
    paddingBottom: ['49px', '70px', '70px', '4.83vw'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      titleTop: {
        color: props.theme.colors.beige,
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        marginBottom: '0',
        fontFamily: props.theme.fonts.spartanBold,
      },
      titleBottom: {
        color: props.theme.colors.wine,
        fontSize: ['35px', '42px', '42px', '2.89vw'],
        fontFamily: props.theme.fonts.spartanBlack,
      },
      paragraph: {
        color: 'black',
        fontSize: ['13px', '16px', '16px', '1.10vw'],
        lineHeight: ['20px', '24px', '24px', '1.65vw'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      stadiumText: {
        color: 'white',
        zIndex: '6',
        position: 'relative',
        fontSize: ['40px', '48px', '48px', '3.31vw'],
        textAlign: 'center',
        fontFamily: props.theme.fonts.spartanMedium,
      },
    }
  })}
`;

export const Span = styled.span`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      'spanStadium': {
        fontFamily: props.theme.fonts.spartanBold,
      },
    }
  })}
`;

export const BannerStadium = styled(Grid)`
  ${css({
    zIndex: '4',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundImage: "url('/images/stadium.png')",
    paddingTop: ['165px', '195px', '195px', '13.45vw'],
    paddingBottom: ['165px', '195px', '195px', '13.45vw'],
    justifyContent: 'center',
    ':before': {
      top: '0',
      left: '0',
      content: "''",
      width:'100%',
      height: '100%',
      zIndex: '5',
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.6)',
    }
  })}
`;
