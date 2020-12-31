import { createGlobalStyle, css } from 'styled-components'

import styleVars, { defaultFont } from './global'

import regularMyriadFont from '../../assets/fonts/MyriadPro-Regular.woff'
import regularMyriadBaseAlignedFont from '../../assets/fonts/MyriadPro-Regular-baseline.woff'
import lightMyriadFont from '../../assets/fonts/MyriadPro-Light.woff'
import semiboldMyriadFont from '../../assets/fonts/MyriadPro-Semibold.woff'
import robotoRegularFont from '../../assets/fonts/Roboto-Regular.ttf'
import robotoMediumFont from '../../assets/fonts/Roboto-Medium.ttf'

/* eslint-disable no-unused-expressions */
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: ${styleVars.fontFamily.default};
  src: url('${regularMyriadFont}');
}

@font-face {
  font-family: ${styleVars.fontFamily.defaultBaseAlinged};
  src: url('${regularMyriadBaseAlignedFont}');
}

@font-face {
  font-family: ${styleVars.fontFamily.light};
  src: url('${lightMyriadFont}');
}

@font-face {
  font-family: ${styleVars.fontFamily.semiBold};
  src: url('${semiboldMyriadFont}');
}

@font-face {
  font-family: ${styleVars.fontFamily.robotoRegular};
  src: url('${robotoRegularFont}');
}

@font-face {
  font-family: ${styleVars.fontFamily.robotoMedium};
  src: url('${robotoMediumFont}');
}

html {
  font-family: ${styleVars.app.fontFamily} !important;
  background-color: ${(props) => (styleVars.app.isIOS && props.theme.gray) || props.theme.white};
}

footer {
  font-family: ${styleVars.app.fontFamily} !important;
}

body {
  margin: 0;
  font: ${defaultFont.font};
  font-family: ${styleVars.app.fontFamilyItaliano || styleVars.app.fontFamily} !important;
  color: ${(props) => props.theme.primaryStone} !important;
  background-color: ${(props) => props.theme.white} !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-size: ${styleVars.app.isIOS ? defaultFont.fontSize : `${defaultFont.fontSize} !important`};
  line-height: ${defaultFont.lineHeight};

  input,
  textarea,
  select,
  button {
    margin: 0;
    font-family: inherit !important;
    font-size: ${defaultFont.fontSize};
    line-height: ${defaultFont.lineHeight};
    color: ${(props) => props.theme.primaryStone};
    ${styleVars.app.isIOS && css`
      font: ${defaultFont.font};`}
  }

  select {
    appearance: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  input:focus {
    outline: none;
  }

  select::-ms-expand {
    display: none;
  }

  input:disabled {
    color: ${(props) => props.theme.primaryStone};
    -webkit-text-fill-color: ${(props) => props.theme.primaryStone};
  }

  select:disabled {
    color: ${(props) => props.theme.primaryStone};
    -webkit-text-fill-color: ${(props) => props.theme.primaryStone};
  }
  /* Remove scroll on the body when react-modal is open */
  &.ReactModal__Body--open {
    overflow: hidden;
  }
}

code {
  font-family: source-code-pro, italo medium, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: ${(props) => props.theme.white};
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.white};
  background-image: linear-gradient(45deg, rgba(0, 114, 172) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(0, 114, 172) 75%, transparent 75%, transparent);
}
`
/* stylelint-enable property-no-vendor-prefix, declaration-block-no-shorthand-property-overrides */
/* eslint-enable no-unused-expressions */

export default GlobalStyle
