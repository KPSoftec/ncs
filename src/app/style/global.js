import {
  getQueryStringByName,
  isIOS,
  isAndroid,
  isMobileAppChannel,
  isFirefox,
  isIE,
  isIEEdge,
} from '../utils/global'

const deepOceanBlue = '#004165'
const fontTypes = {
  default: 'myriad-pro',
  defaultBaseAlinged: 'myriad-pro-basealign',
  light: 'myriad-pro-light',
  semiBold: 'myriad-pro-semibold',
  robotoRegular: 'Roboto',
  robotoMedium: 'Roboto-Medium',
  italoMedium: 'italo medium',
  sansSerif: 'sans-serif',
}

export const getItalianoFontFamily = () => fontTypes.italoMedium
export const getDefaultFontFamily = () => fontTypes.sansSerif
export const getDefaultLightFontFamily = () => fontTypes.light

export const getFontFamily = ({ isSemiBold, isLight } = {}) => {
  const fontIOS = '-apple-system, BlinkMacSystemFont, sans-serif'
  const fontAndroid = `${isSemiBold ? fontTypes.robotoMedium : fontTypes.robotoRegular}, Roboto, myriad-pro`
  // eslint-disable-next-line no-nested-ternary
  let fontDefault = `${isSemiBold ? fontTypes.semiBold : isLight ? fontTypes.light : fontTypes.default}, ${fontTypes.sansSerif}`

  if (isMobileAppChannel() && isIOS()) {
    fontDefault = fontIOS
  } else if (isMobileAppChannel() && isAndroid()) {
    fontDefault = fontAndroid
  }

  return fontDefault
}

export const getSemiboldFontFamily = () => getFontFamily({ isSemiBold: true })
export const getLightFontFamily = () => getFontFamily({ isLight: true })

export const getiOSFontSizeNumber = () => {
  const fontSizeNumbers = {
    uictcontentsizecategoryxs: 1,
    uictcontentsizecategorys: 2,
    uictcontentsizecategorym: 3,
    uictcontentsizecategoryl: 4, // Default system font-size
    uictcontentsizecategoryxl: 5,
    uictcontentsizecategoryxxl: 6,
    uictcontentsizecategoryxxxl: 7,
    uictcontentsizecategoryaccessibilitym: 8, // Larger Accessibility Sizes: 8+
    uictcontentsizecategoryaccessibilityl: 9,
    uictcontentsizecategoryaccessibilityxl: 10,
    uictcontentsizecategoryaccessibilityxxl: 11,
    uictcontentsizecategoryaccessibilityxxxl: 12,
  }

  return fontSizeNumbers[getQueryStringByName('fontSizeSelected') && getQueryStringByName('fontSizeSelected').toLowerCase()] || fontSizeNumbers.uictcontentsizecategoryl
}

export const themeWidth = {
  fullWidth: true,
}

export const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1, // rem - 16px
    outerMargin: 2, // rem - 32px
    container: {
      sm: 48.1875, // rem - 771px
    },
    breakpoints: {
      xs: 0, // em
      sm: 30.0625, // em - 481px
      md: 37.5625, // em - 601px
      lg: 48.25, // em - 772px
    },
  },
}

// Android system font-sizes:
//
// Pixel(Root)/Sony/HTC devices font size ranges:
// 1. 0.85 (Small)
// 2. 1.0 (Default)
// 3. 1.15 (Large)
// 4. 1.30 (Largest)

// Samsung font size ranges:
// 1. 0.80 (Tiny)
// 2. 0.90
// 3. 1.0
// 4. 1.10
// 5. 1.30
// 6. 1.50
// 7. 1.70 (Huge)

export const lightColor = {
  // Color theme
  mode: 'light',
  lightGray: '#3C3C4329',
  lightBlack: '#ffffff',
  whitePerm: '#ffffff',
  oceanBlue: '#0072ac',
  oceanBluePerm: '#0072ac',
  OceanBlue: '#007dba',
  oceanBlueBlured10: '#007DBA10',
  oceanBlueBlured20: '#007DBA20',
  oceanBlueBlured40: '#007DBA40',
  ocean30: '#b2d8ea',
  lightOceanBlue: '#008dd4',
  deepOceanBlue,
  kpsHeader: '#101010',
  green: '#008a02',
  greenHover: '#33c133',
  white: '#fff',
  black: '#000',
  blackBlured: '#00000012',
  blackOpac: '#00000065',
  primaryStone: '#394a58',
  lighterFontStone70: '#6b7782', // this is changed to 75% stone to fix accessibility issue
  disabledStone40: '#b0b7bc',
  stoneLight: '#e6e9eb',
  stoneExtraLight: '#fafafa',
  red: '#d53d39',
  redBlured: '#dd2e2e10',
  redHover: '#ff0000',
  amber: '#f5a623',
  lightRed: '#FF000010',
  darkblue: '#98d7f0',
  lightblue: '#e2f4fc',
  infoActionBlue: '#006ba1',
  gray: '#f7f7f7',
  grayHover: '#D1D0D5',
  htmlLink: '#0072ac',
  transparent: 'transparent',
  inputBorderPem: '#0093D8',
  inputColor: '#494949',
  ...gridTheme,
  ...themeWidth,
}

export const darkColor = {
  // Color theme
  mode: 'dark',
  lightGray: '#54545865',
  lightBlack: '#1c1c1e',
  whitePerm: '#ffffff',
  oceanBlue: '#0a84ff',
  OceanBlue: '#0a84ff',
  oceanBluePerm: '#0072ac',
  oceanBlueBlured10: '#007DBA10',
  oceanBlueBlured20: '#007DBA20',
  oceanBlueBlured40: '#007DBA40',
  ocean30: '#b2d8ea',
  lightOceanBlue: '#008dd4',
  deepOceanBlue,
  kpsHeader: '#101010',
  green: '#008a02',
  greenHover: '#33c133',
  white: '#000000',
  black: '#ffffff',
  blackBlured: '#00000012',
  blackOpac: '#00000065',
  primaryStone: '#ffffff',
  lighterFontStone70: '#ebebf5', // this is changed to 75% stone to fix accessibility issue
  disabledStone40: '#757575',
  stoneLight: '#757575',
  stoneExtraLight: '#2c2c2e',
  red: '#dd2e2e',
  redBlured: '#dd2e2e10',
  redHover: '#dd2e2e',
  amber: '#df7a00',
  lightRed: '#FF000010',
  darkblue: '#48484a',
  lightblue: '#1c1c1e',
  infoActionBlue: '#0a84ff',
  gray: '000000',
  grayHover: '#3A3A3C',
  htmlLink: '#0296e0',
  transparent: 'transparent',
  inputBorderPem: '#0093D8',
  inputColor: '#ffffff',
  ...gridTheme,
  ...themeWidth,
}

export const getAndroidFontSize = () => {
  let fontSizeSelected = Number(getQueryStringByName('fontSizeSelected'))
  fontSizeSelected = !fontSizeSelected || Number.isNaN(fontSizeSelected) ? 1 : fontSizeSelected
  return fontSizeSelected
}

// Note: The em values listed below for mobile fontSize are not equivalent to the px values for web.
// e.g. 1.1em != 18px (when baseline font-size is 16px/100%)
export const defaultFont = {
  fontSize: '16px',
  fontFamily: getFontFamily(),
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.3125' : '') : '1.375',
  letterSpacing: isMobileAppChannel() ? '' : '0.2px',
  font: isMobileAppChannel() && isIOS() ? '-apple-system-subheadline' : '',
}

export const extraSmallFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '0.75em' : '12px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.333' : '') : '1.333',
  // eslint-disable-next-line no-nested-ternary
  letterSpacing: isMobileAppChannel() ? (isAndroid() ? '0.07px' : '') : '0.2px',
  font: isMobileAppChannel() && isIOS() ? '-apple-system-caption1' : '',
}

export const smallFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '0.875em' : '14px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.428' : '') : '1.429',
  letterSpacing: isMobileAppChannel() ? '' : '0',
  font: isMobileAppChannel() && isIOS() ? '-apple-system-footnote' : '',
}

export const mediumFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '1.1em' : '18px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.3125' : '') : '1.333',
  letterSpacing: isMobileAppChannel() ? '' : '0',
  font: isMobileAppChannel() && isIOS() ? '-apple-system-body' : '',
  verticalAlign: isFirefox ? '-moz-middle-with-baseline' : '-webkit-baseline-middle',
}

export const largeFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '1.125em' : '20px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.445' : '') : '1.2',
  letterSpacing: isMobileAppChannel() ? '' : '-0.1px',
  fontFamily: isMobileAppChannel() && isAndroid() ? `${getSemiboldFontFamily()} !important` : 'inherit',
  font: isMobileAppChannel() && isIOS() ? '-apple-system-title2' : '',
  // eslint-disable-next-line no-nested-ternary
  fontWeight: isMobileAppChannel() && isIOS() ? '700' : !isMobileAppChannel() ? 'normal' : '',
  color: !isMobileAppChannel() ? deepOceanBlue : '',
}

export const extraLargeFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '1.5em' : '32px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.167' : '') : '1.062',
  letterSpacing: isMobileAppChannel() ? '' : '-0.25px',
  fontFamily: `${isAndroid() ? getSemiboldFontFamily() : getLightFontFamily()} !important`,
  font: isMobileAppChannel() && isIOS() ? '-apple-system-title0' : '',
  // eslint-disable-next-line no-nested-ternary
  fontWeight: isMobileAppChannel() ? (isIOS() ? '500' : '') : '',
  color: !isMobileAppChannel() ? deepOceanBlue : '',
}

export const largerFont = {
  fontSize: isMobileAppChannel() && isAndroid() ? '1.5em' : '24px',
  // eslint-disable-next-line no-nested-ternary
  lineHeight: isMobileAppChannel() ? (isAndroid() ? '1.167' : '') : '1.062',
  letterSpacing: isMobileAppChannel() ? '' : '-0.25px',
  fontFamily: `${isAndroid() ? getSemiboldFontFamily() : getLightFontFamily()} !important`,
  font: isMobileAppChannel() && isIOS() ? '-apple-system-title0' : '',
  // eslint-disable-next-line no-nested-ternary
  fontWeight: isMobileAppChannel() ? (isIOS() ? '500' : '') : '',
  color: !isMobileAppChannel() ? deepOceanBlue : '',
}

const styleVars = {
  app: {
    // Assets path to map images and fonts
    assetsPath: '../../assets/',
    isMobileApp: isMobileAppChannel(),
    isIOS: isMobileAppChannel() && isIOS(),
    isAndroid: isMobileAppChannel() && isAndroid(),
    fontFamily: getFontFamily(),
    defaultFontFamily: getDefaultFontFamily(),
    lightFontFamily: getDefaultLightFontFamily(),
    fontFamilyItaliano: getItalianoFontFamily(),
    iOSFontStrength: getiOSFontSizeNumber(),
    androidFontStrength: getAndroidFontSize(),
    isIEOrEdge: isIE() || isIEEdge(),
  },
  breakpoint: {
    xs: '0px',
    sm: '480px',
    md: '768px',
    lg: '980px',
  },
  fontFamily: {
    ...fontTypes,
  },
  container: {
    breakpoint: {
      xs: '480px',
      sm: '600px',
      md: '771px',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '456px',
      lg: '750px',
    },
  },
  sectionContainer: {
    paddingHorizontal: {
      xs: '16px',
      sm: '24px',
      md: '24px',
      lg: '8px',
    },
    paddingTop: {
      xs: '0',
      xsMobileApp: '32px',
      sm: '0',
      smMobileApp: '32px',
      md: '24px',
      lg: '8px',
    },
    paddingBottom: {
      xs: '0',
      sm: '0',
      md: '24px',
      lg: '8px',
    },
    minHeight: '330px',
  },
}

export const isDarkTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? darkColor : lightColor)

export default styleVars
