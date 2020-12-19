import styled from 'styled-components';
import css from '@styled-system/css';
import { Grid } from '@material-ui/core';
import { variant } from 'styled-system';

export const Divider = styled(Grid)`
  ${css({
    left: '0',
    top: ['-60px'],
    height: ['60px'],
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
    paddingTop: ['83px'],
  })}
`;

export const ContentRight = styled(Grid)`
  ${css({
    justifyContent: 'flex-start',
    paddingTop: ['70px'],
    paddingBottom: ['70px'],
  })}
`;

export const Text = styled.p`
  ${(props) => variant({
    prop: 'styles',
    variants: {
      titleTop: {
        color: props.theme.colors.gold,
        fontSize: ['42px'],
        fontWeight: '400',
        lineHeight: '.9',
        marginBottom: '0',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      titleBottom: {
        color: props.theme.colors.wine,
        fontSize: ['42px'],
        fontWeight: '800',
        lineHeight: '.9',
        fontFamily: props.theme.fonts.spartanRegular,
      },
      paragraph: {
        color: 'black',
        fontSize: ['16px'],
        fontWeight: '400',
        lineHeight: ['24px'],
        fontFamily: props.theme.fonts.spartanRegular,
      },
      stadiumText: {
        color: 'white',
        zIndex: '6',
        position: 'relative',
        fontSize: ['48px'],
        fontWeight: '350',
        lineHeight: '1',
        textAlign: 'center',
        fontFamily: props.theme.fonts.spartanRegular,
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

export const BannerStadium = styled(Grid)`
  ${css({
    zIndex: '4',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: "url('/images/stadium.png')",
    paddingTop: ['195px'],
    paddingBottom: ['195px'],
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
