import styled, { css } from 'styled-components'
import HardwareKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import HardwareKeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import ContentClearButton from '@material-ui/icons/Cancel'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import ContentRemoveCircle from '@material-ui/icons/RemoveCircle'
import ContentBackspace from '@material-ui/icons/Backspace'
import ContentClear from '@material-ui/icons/Clear'
import ActionCheckCircle from '@material-ui/icons/CheckCircle'
import Done from '@material-ui/icons/Done'
import fingerPrintIcon from '@material-ui/icons/Fingerprint'
import touchIdIcon from '../../assets/img/lightmode/ic_touch_id.svg'
import faceIdIcon from '../../assets/img/lightmode/ic_face_id.svg'
import faceIdIconDarkmode from '../../assets/img/darkmode/ic_face_id-darkmode.svg'
import setUpPinIcon from '../../assets/img/lightmode/confirm-number-app-pin.svg'
import setUpPinIconDarkmode from '../../assets/img/darkmode/confirm-number-app-pin-darkmode.svg'
import createPasswordIcon from '../../assets/img/lightmode/create-password.svg'
import createPasswordIconDarkmode from '../../assets/img/darkmode/create-password-darkmode.svg'
import infoIconLightMode from '../../assets/img/lightmode/Info-Icon.svg'
import infoIconDarkMode from '../../assets/img/darkmode/Info-Icon-darkmode.svg'
import errorRedCross from '../../assets/img/cross-red.svg'

import styleVars, {
  mediumFont,
  smallFont,
  extraSmallFont,
  extraLargeFont,
  largeFont,
  largerFont,
  getSemiboldFontFamily,
  getLightFontFamily,
  defaultFont,
} from './global'

import {
  fadeIn, fadeOut, scaleIn, scaleOut,
} from './animation.styles'

export const CenterContainer = styled.div`
  text-align: center;
`

export const LeftContainer = styled.div`
  text-align: left;
`

export const RightContainer = styled.div`
  text-align: right;
`
export const DisabledFont = styled.span`
color: ${(props) => props.theme.disabledStone40};
`

export const LighterFont = styled.span`
  color: ${(props) => (styleVars.app.isMobileApp && styleVars.app.isIOS ? props.theme.lighterFontStone70 : props.theme.primaryStone)} !important;
`
export const LighterLinkFont = styled.span`
  color: ${(props) => props.theme.oceanBlue} !important;
`
export const ErrorMsg = styled.span`
  color: ${(props) => props.theme.red};
`

export const LighterFontLarge = styled(LighterFont)`
  ${{ ...largeFont }}
`

export const MediumFont = styled.span`
  ${{ ...mediumFont }}
`
export const PrimaryFontMedium = styled(MediumFont)`
  ${(props) => (props.isPlaceHolder && styleVars.app.isMobileApp && css`
    color: ${props.theme.primaryStone} !important;
  `)}
`
export const PrimaryFontDefault = styled.span`
  ${(props) => (props.isPlaceHolder && styleVars.app.isAndroid && css`
    color: ${props.theme.lighterFontStone70} !important;
  `)}
  ${{ ...defaultFont }}
`

export const LighterFontMedium = styled(LighterFont)`
  ${{ ...mediumFont }}
`

export const ExtraSmallFont = styled.div`
  display: inline-block;
  ${{ ...extraSmallFont }};
`

export const SmallFont = styled.span`
  ${{ ...smallFont }}
`

export const LargeFont = styled.span`
  ${{ ...largeFont }}
`

export const LargeFontLightTypo = styled(LargeFont)`
  font-family: ${getLightFontFamily()} !important;
`
export const LargeFontLightTypoIos = styled(LargeFontLightTypo)`
  ${styleVars.app.isMobileApp && styleVars.app.isIOS && css`
    text-transform: capitalize !important;
    font-size: 1.125em;
  `}
`

export const LargeFontLightTypoUnsubscribeHeading = styled(LargeFontLightTypo)`
  ${styleVars.app.isMobileApp && styleVars.app.isIOS && css`
    text-transform: capitalize !important;
    font-size: 32px;
  `}
`

export const ProfileSectionHeading = styled.h2`
  /* override user agent css for h2 */
  font-weight: inherit;
  margin: 0;
  display: inline-block;
  ${styleVars.app.isAndroid ? { ...extraSmallFont } : { ...largeFont }}
  font-family: ${styleVars.app.isMobileApp ? getSemiboldFontFamily() : getLightFontFamily()}, sans-serif !important;
`

export const SemiBoldFont = styled.span`
  font-family: ${getSemiboldFontFamily()};
  font-weight: ${styleVars.app.isIOS ? '600' : ''};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
`

export const CustomWrapperEnhancer = styled.span`
  ${(props) => ({...props.component})};
`

export const DummyBulletsWrapper = styled(SemiBoldFont)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '40px')};

  @media screen and (max-width: 360px) {
    font-size: 32px;
  }

  @media screen and (max-width: 332px) {
    font-size: 27px;
  }
`

export const Heading = styled.h1`
margin: 0 0 ${(props) => props.marginBottom || '1.5em'};
font-weight: normal;
${{ ...extraLargeFont }}
`

export const HeadingUpdateMessage = styled.h2`
margin: 0 0 ${(props) => props.marginBottom || '1.5em'};
${{ ...largeFont }};
`

export const SubHeadingMessage = styled.h2`
  margin: 0 0 ${(props) => props.marginBottom || '1.5em'};
  font-weight: normal;
  ${{ ...largerFont }};
`

export const HeadingForErrorPages = styled.h1`
  ${{ ...extraLargeFont }}
  font-weight: 400;
  margin: 0 0 ${(props) => props.marginBottom || '0.75em'};
  ${styleVars.app.isMobileApp && styleVars.app.isIOS && css`
    font-size: 1.375em;
    line-height: 1.273;
    letter-spacing: 0.01em;
    font-weight: 600;
  `}
  ${styleVars.app.isMobileApp && styleVars.app.isAndroid && css`
    font-size: 1.25em;
    line-height: 1.2;
    font-weight: 600;
  `}
`

// need this child dom element to overrride ios font size if needed
export const HeadingSpan = styled.span`
  ${styleVars.app.isIOS && styleVars.app.iOSFontStrength > 7 && css`
    font-size: 1em;
  `}
`

export const HeadingSymbolSpan = styled.span`
  color: ${props => (props.color ? props.color : props.theme.lightOceanBlue)};
  ${styleVars.app.isIOS && styleVars.app.iOSFontStrength > 7 && css`
    font-size: 1em;
  `}
`

// Font size to support dynamic text iOS
const iconMediumFontSize = {
  width: '24px',
  height: '24px',
}

if (styleVars.app.isMobileApp) {
  if (styleVars.app.iOSFontStrength > 8) {
    iconMediumFontSize.width = '40px'
    iconMediumFontSize.height = '50px'
  } else if (styleVars.app.iOSFontStrength > 6 || styleVars.app.androidFontStrength >= 1.3) {
    iconMediumFontSize.width = '30px'
    iconMediumFontSize.height = '40px'
  }
}
export const IconFontMedium = {
  color: (props) => props.theme.disabledStone40,
  ...iconMediumFontSize,
}
// END --- Font size to support dynamic text iOS

export const IconBackAction = {
  color: (props) => props.theme.lighterFontStone70,
  width: '30px',
  height: '28px',
}

export const NoWrap = styled.span`
  white-space: ${styleVars.app.iOSFontStrength > 7 || styleVars.app.androidFontStrength >= 1.3 ? 'normal' : 'nowrap'};
  ${styleVars.app.iOSFontStrength > 9 && css`
    @media screen and (max-width: 320px) {
      white-space: normal;
    }
  `}
`

export const License = styled.span`
  white-space: nowrap;
`

export const NoWrapMobileNumber = styled(NoWrap)`
  ${(styleVars.app.iOSFontStrength > 7 || styleVars.app.androidFontStrength >= 1.3) && 'word-break: break-word; white-space: normal;'}
  @media screen and (max-width: 320px) {
    word-break: break-word;
    white-space: normal;
  }
`

export const NoWrapMobileFriendly = styled(NoWrap)`
  ${(styleVars.app.iOSFontStrength > 4 || styleVars.app.androidFontStrength > 1.1) && css`
    white-space: normal;
  `}
`

export const WrapWord = styled.span`
  word-break: break-word;
`

export const LighterFontSection = styled.div`
margin: ${(props) => (props.marginTop || '16px')} 0 0;
color: ${(props) => (props.lightColor ? props.theme.lighterFontStone70 : '')};
${(props) => (props.alignCenter && css`
  text-align: center;
`)}`

export const HorzSeperator = styled.hr`
  margin: ${(props) => (props.marginTop || '10px')} 0  ${(props) => (props.marginBottom || '15px')};
  border: 0;
  border-top: ${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${(props) => (props.theme.stoneLight)};

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    margin-left: -${styleVars.sectionContainer.paddingHorizontal.sm};
    margin-right: -${styleVars.sectionContainer.paddingHorizontal.sm};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    margin-left: -${styleVars.sectionContainer.paddingHorizontal.xs};
    margin-right: -${styleVars.sectionContainer.paddingHorizontal.xs};
  }
`

export const HorzParaSeperator = styled(HorzSeperator)`
  margin-bottom: 32px;
`

export const HorzRowSeperator = styled(HorzSeperator)`
  margin-left: 0;
`

export const IconKeyboardArrowRight = styled(HardwareKeyboardArrowRight).attrs({
  focusable: 'false',
})`
  float: right;
`

export const IconKeyboardArrowLeft = styled(HardwareKeyboardArrowLeft).attrs({
  focusable: 'false',
})`
  float: left;
`

export const IconAddCircle = styled(ContentAddCircle).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${(props) => (props.theme.green)} !important;
  width: 16px !important;
  height: 16px !important;
`

export const IconClearButton = styled(ContentClearButton).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${(props) => props.theme.lighterFontStone70} !important;
  width: 16px !important;
  height: 16px !important;
  ${styleVars.app.iOSFontStrength > 6 && css`
    width: 20px !important;
    height: 20px !important;
  `}
  ${styleVars.app.iOSFontStrength > 10 && css`
    width: 24px !important;
    height: 24px !important;
  `}
`

export const IconRemoveCircle = styled(ContentRemoveCircle).attrs({
  focusable: 'false',
})`
  float: left;
  color: ${(props) => (props.theme.red)} !important;
  width: 16px !important;
  height: 30px !important;
`

export const IconBackspace = styled(ContentBackspace).attrs({
  focusable: 'false',
})`
color: ${(props) => props.theme.primaryStone} !important;
`

export const IconClear = styled(ContentClear).attrs({
  focusable: 'false',
})`
  color: ${(props) => props.theme.primaryStone} !important;
  height: 35px !important;
  width: 35px !important;
`

export const IconCheckCircle = styled(ActionCheckCircle).attrs({
  focusable: 'false',
})`
  color: ${(props) => (props.theme.primaryStone)} !important;
  width: 16px !important;
  height: 16px !important;
`

export const IconTickRight = styled(Done).attrs({
  focusable: 'false',
  'aria-hidden': 'true',
})`
  float: right;
  color: ${(props) => props.theme.oceanBlue} !important;
`

export const IconFingerprint = styled(fingerPrintIcon).attrs({
  focusable: 'false',
  'aria-hidden': 'true',
})`
  color: ${(props) => props.theme.oceanBlue} !important;
  width: 80px !important;
  height: 88px !important;
  margin-bottom: 24px;
`

export const IconTouchId = styled.img.attrs({
  src: touchIdIcon,
  alt: 'Touch ID',
  focusable: 'false',
  'aria-hidden': 'true',
})`
  color: ${(props) => props.theme.oceanBlue} !important;
  width: 64px !important;
  height: 64px !important;
  margin-bottom: 24px;
`

export const IconFaceId = styled.img.attrs({
  src: (props) => (props.theme.mode === 'dark' ? faceIdIconDarkmode : faceIdIcon),
  alt: 'Face ID',
  focusable: 'false',
  'aria-hidden': 'true',
})`
  color: ${(props) => props.theme.oceanBlue} !important;
  width: 64px !important;
  height: 64px !important;
  margin-bottom: 24px;
`

export const SetPinIcon = styled.img.attrs({
  src: (props) => (props.theme.mode === 'dark' ? setUpPinIconDarkmode : setUpPinIcon),
  'data-test-id': 'set-up-pin-icon',
  alt: 'set up pin icon',
  focusable: 'false',
  'aria-hidden': 'true',
})`
  margin-bottom: 32px;
  ${styleVars.app.isMobileApp && css`
    margin-top: -8px;
  `}
`

export const CreatePasswordIcon = styled.img.attrs({
  src: (props) => (props.theme.mode === 'dark' ? createPasswordIconDarkmode : createPasswordIcon),
  'data-test-id': 'create-password-icon',
  alt: 'create password icon',
  focusable: 'false',
})`
  margin-bottom: 32px;
  width: 82px;
  height: 62px;
  ${styleVars.app.isMobileApp && css`
    margin-top: 96px;
  `}
`

export const ParaWrapper = styled.div`
margin-top: ${(props) => (props.marginTop || 0)};
margin-right: ${(props) => (props.marginRight || 0)};
margin-bottom: ${(props) => (props.marginBottom || 0)};
margin-left: ${(props) => (props.marginLeft || 0)};
`

export const InfoSectionWithSwimLine = styled.div`
  ${styleVars.app.isMobileApp && css`
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
  `}
  ${(props) => styleVars.app.isMobileApp && styleVars.app.isIOS && css`
      color: ${props.theme.lighterFontStone70} !important;
      background-color: ${props.theme.lightColor} !important;
  `}
`
export const AlertInfo = styled.div`
  ${(props) => props.show && css`
    animation: ${fadeIn} 0.5s ease 1, ${scaleIn} 0.3s ease 1;
  `}
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-bottom: 32px;
  ${(props) => !props.show && css`
    animation: ${fadeOut} 0.5s ease 1, ${scaleOut} 0.3s ease 1;
    transform: scale(0);
  `}
`
export const AlertContent = styled.div`
  padding-top: ${(props) => (props.marginTop || '2px')};
  padding-right: ${(props) => (props.marginRight || '16px')};
  padding-bottom: ${(props) => (props.marginBottom || '5px')};
  padding-left: ${(props) => (props.marginLeft || '16px')};
`

export const InfoImg = styled.img.attrs((props) => ({
  src: props.theme.mode === 'dark' ? infoIconDarkMode : infoIconLightMode,
  alt: 'info icon',
}))`
  width: 77px;
  height: 70px;
  margin-bottom: 24px;
`;

export const ErrorImg = styled.img.attrs(() => ({
  src: errorRedCross,
  alt: 'info icon',
}))`
  width: 77px;
  height: 70px;
  margin-bottom: 24px;
`;

export const ErrorDetailsSection = styled.div`
  display: inline-block;
  min-width: 128px;
  margin: 0 ${props => props.marginRight || 'auto'} ${props => props.marginBottom || '0'} auto;
  ${(styleVars.app.iOSFontStrength > 7 || styleVars.app.androidFontStrength >= 1.3) && css`
  display: block;
  margin: 0 auto ${props => props.marginBottom || '1.125em'} auto;
  `}
  a {
    display: block;
    font-size: ${defaultFont.fontSize};
    line-height: ${defaultFont.lineHeight};
  }

  .sub-header {
    display: block;
    margin-top: 3em;
  }
`

export const PhoneNumberLink = styled.a`
  color: ${(props) => props.theme.oceanBlue};
  text-decoration: none;
`

export const PhoneNumberCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const PhoneNumberRow = styled.div`
  display: flex;
`

export const HiddenBlockForScreenReader = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
