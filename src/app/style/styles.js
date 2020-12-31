/* eslint-disable max-len */
/* stylelint-disable value-keyword-case */
/* stylelint-disable declaration-colon-newline-after */
/* stylelint-disable declaration-empty-line-before */
import styled, { css, keyframes } from 'styled-components'
import { Grid as ThemeGrid, Row, Col } from 'react-styled-flexboxgrid'

import { isIE } from '../utils/global'

import styleVars, {
  getSemiboldFontFamily, mediumFont, largeFont, defaultFont,
} from './global'
import './global.styles'
import {
  SlideStateSideFromRight,
  SlideStateSideFromLeft,
  SlideStateTop,
  OverlayModalTop,
  SlideStateDown,
  ScaleSection,
  fadeIn,
} from './animation.styles'
import BackgroundFrame from '../../assets/img/background/Login-background.svg'

const BackgroundlogoSpin = keyframes`
  from {
    background-position: 0 100%;
  }

  to {
    background-position: -${window.screen.width + 50}px 100%;
  }
`

export const BackgroundContainer = styled.span`
  background-image: ${(props) => (props.visible ? ` url(${BackgroundFrame}) ` : null)};
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 100% 25%;
  background-origin: content-box, padding-box;
  ${styleVars.app.isIEOrEdge && css`
  animation: ${BackgroundlogoSpin} infinite linear;
  animation-duration: ${(props) => (props.animate ? '30s' : '0s')};
  `}
  padding-bottom: ${(props) => (props.visible ? '16px' : 0)};
  min-height: '100vh';

  @media (prefers-reduced-motion: no-preference) {
    animation: ${BackgroundlogoSpin} infinite linear;
    animation-duration: ${(props) => (props.animate ? '30s' : '0s')};
  }
`

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${!styleVars.app.isIEOrEdge && css`
  overflow-x: hidden;
  flex: 1;
  `}
`

export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${styleVars.app.isIEOrEdge && css`
  height: 100vh;
  `}
  ${!styleVars.app.isIEOrEdge && css`
  min-height: 100vh;
  `}
  background: ${props => (styleVars.app.isIOS && !props.isInterstitialPage ? props.theme.gray : props.theme.white)};
`

export const AppMain = styled.main`
  flex: 1 0 auto;
`

export const AppMainDiv = styled.div`
  flex: 1 0 auto;
`
export const MainContainer = styled.div`
  margin: ${styleVars.app.isMobileApp ? 'auto auto 32px' : '48px auto 48px'};
  margin-top: ${(props) => (props.marginTop)};
  margin-bottom: ${(props) => (props.marginBottom)};
  max-width: ${(props) => (props.theme.fullWidth ? styleVars.container.width.xs : styleVars.container.width.lg)};
  padding: ${(props) => (props.theme.fullWidth ? '0 2rem 0 2rem' : 0)};
  ${styleVars.app.isMobileApp && css`
  color: ${(props) => (props.theme.primaryStone)};
  `}
  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    max-width: ${(props) => (props.theme.fullWidth ? styleVars.container.width.xs : styleVars.container.width.md)};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    max-width: ${(props) => (props.theme.fullWidth ? styleVars.container.width.xs : styleVars.container.width.sm)};
    padding: 0;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    max-width: ${(props) => (props.theme.fullWidth ? styleVars.container.width.xs : styleVars.container.width.xs)};
  }
`

export const styleSectionContainerSM = css`
  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-top: ${styleVars.sectionContainer.paddingTop[styleVars.app.isMobileApp ? 'smMobileApp' : 'sm']};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-bottom: ${styleVars.sectionContainer.paddingBottom.sm};
    border: none;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding-top: ${styleVars.sectionContainer.paddingTop[styleVars.app.isMobileApp ? 'xsMobileApp' : 'xs']};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-bottom: ${styleVars.sectionContainer.paddingBottom.xs};
  }
`

export const SectionContainer = styled.div`
  min-height: ${(props) => (props.minHeight || styleVars.sectionContainer.minHeight)};
  /* stylelint-disable value-list-max-empty-lines, indentation */
  background-color:
    ${(props) => {
    let colour = props.theme.white
    if (styleVars.app.isIOS && !props.isInterstitialPage) {
      colour = props.theme.gray
    } else if (props.noBackgroundColor) {
      colour = 'transparent'
    }
    return colour
  }};
  border: ${(props) => ((props.noBorder || styleVars.app.isMobileApp) ? 'none' : `1px solid ${props.theme.stoneLight}`)};
  border-radius: 3px;
  padding-top: ${styleVars.sectionContainer.paddingTop.lg};
  padding-left: ${styleVars.sectionContainer.paddingHorizontal.lg};
  padding-right: ${styleVars.sectionContainer.paddingHorizontal.lg};
  padding-bottom: ${ !styleVars.app.isMobileApp ? styleVars.sectionContainer.paddingBottom.lg : ''};

  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    padding-top: ${styleVars.sectionContainer.paddingTop.md};
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.md};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.md};
    padding-bottom: ${ !styleVars.app.isMobileApp ? styleVars.sectionContainer.paddingBottom.md : ''};
  }

  ${styleSectionContainerSM}
  .action-container {
    padding-top: 12px;
  }

  .action-container-no-padding {
    padding-top: 0;
  }
`

export const SmallSectionContainer = styled(SectionContainer)`
max-width: ${styleVars.container.width.md};
min-height: ${(props) => (props.minHeight || styleVars.sectionContainer.minHeight)};
margin-left: auto;
margin-right: auto;

${(props) => props.withAction && styleVars.app.isMobileApp && css`
    margin-top: 16px;
`}

${(props) => props.verticalAlignMiddle && styleVars.app.isMobileApp && css`
    @media screen and (min-height: ${styleVars.container.breakpoint.xs}) and (orientation: portrait) {
      margin-top: ${props.withInfoContent ? '10%' : '25%'};
    }

    @media screen and (min-height: ${styleVars.container.breakpoint.sm}) and (orientation: portrait) {
      margin-top: ${props.withInfoContent ? '30%' : '35%'};
    }

    @media screen and (min-height: ${styleVars.container.breakpoint.md}) and (orientation: portrait) {
      margin-top: ${props.withInfoContent ? '40%' : '50%'};
    }
`}
`
export const CenteredSmallSectionContainer = styled(SmallSectionContainer)`
  text-align: center;
`

export const CenteredSmallSectionContainerIos = styled.div`
  text-align: center;
`

export const SBESmallSectionContainer = styled(SmallSectionContainer)`
${styleVars.app.isMobileApp && css`
    padding-left: 0 !important;
    padding-right: 0 !important;
`}
`

const MobileSectionContainerStyle = css`
  ${styleVars.app.isMobileApp && css`
    padding-right: 0 !important;
    padding-left: 0 !important;
    padding-top: ${(props) => (props.paddingTop || '32px')};

    .action-container {
      padding-right: 16px;
    }
  `}
`
export const SectionContainerWithSwimLine = styled(SectionContainer)`
  ${MobileSectionContainerStyle};
`

export const SmallSectionContainerWithSwimLine = styled(SmallSectionContainer)`
${MobileSectionContainerStyle};
${(props) => props.isAlignCenter && css`
    text-align: center;
`}
`

export const ModalMainContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1055;
  overflow: scroll;
  animation: ${OverlayModalTop} 0.4s ease 1;
  background-color: ${(props) => (styleVars.app.isMobileApp ? props.theme.white : props.theme.stoneExtraLight)};
  ${(props) => props.hidden && css`
    animation: ${SlideStateDown} 0.4s ease 1;
    pointer-events: none;
  `}
  ${(props) => props.show && css`
    animation: ${OverlayModalTop} 0.4s ease 1;
  `}
`

export const ModalMainSection = styled(MainContainer)`
  margin-top: 0;
  margin-bottom: 0 !important;
  max-width: ${styleVars.container.width.md};
`

export const ModalSectionContainer = styled(SectionContainer)`
  border: none;
  box-shadow: none;
  margin-top: 0 !important;
  text-align: center;
  border-radius: 0;
  padding: 16px 24px !important;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding: 16px !important;
  }
`

export const Grid = styled(ThemeGrid)`
  max-width: 100%;
  padding-left: ${(props) => props.paddingLeft || '0rem'};
  padding-right: ${(props) => props.paddingRight || '0rem'};
`

export const TransitionStateFromRight = styled.div`
  position: relative;
  ${!styleVars.app.isMobileApp && css`
    animation: ${SlideStateSideFromRight} 0.2s ease 0.1s both;
  `}
  ${styleVars.app.isMobileApp && styleVars.app.isAndroid && css`
    animation: ${fadeIn} 0.5s ease 0.1s both;
  `}
`

export const TransitionStateFromLeft = styled.div`
  position: relative;
  ${!styleVars.app.isMobileApp && css`
    animation: ${SlideStateSideFromLeft} 0.2s ease 0.1s both;
  `}
  ${styleVars.app.isMobileApp && styleVars.app.isAndroid && css`
    animation: ${fadeIn} 0.5s ease 0.1s both;
  `}
`

export const TransitionStateTop = styled.div`
  position: relative;
  ${!styleVars.app.isMobileApp && css`
    animation: ${SlideStateTop} 1s ease 0.1s both;
  `}
  ${styleVars.app.isMobileApp && styleVars.app.isAndroid && css`
    animation: ${fadeIn} 0.5s ease 0.1s both;
  `}
`

export const ScaleSectionContainer = styled.div`
  position: relative;
  /* padding-left changed from incorrectly attributed 'auto' to 0 value */
  padding-left: ${(props) => props.paddingLeft || 0};
  ${!styleVars.app.isMobileApp && css`
    animation: ${ScaleSection} 0.2s ease 0.1s both;
  `}
`

export const ButtonText = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0 !important;
  width: ${(props) => props.width || 'auto'} !important;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: transparent;
  }
`

export const ButtonPrimaryText = styled(ButtonText)`
  color: ${(props) => (props.disabled ? props.theme.disabledStone40 : props.theme.OceanBlue)};

  &:hover {
    color: ${(props) => (props.disabled ? props.theme.disabledStone40 : props.theme.lightOceanBlue)};
  }
`

export const ButtonIosStyle = styled(ButtonPrimaryText)`
${(props) => (props.isDoneAction ? { ...mediumFont } : { ...largeFont })};
font-weight: 600 !important;
padding: 0 2px 0;
-webkit-tap-highlight-color: transparent;
${(props) => props.isDoneAction && css`
    padding: 17px 0;
    color: ${props.theme.whitePerm};
    background-color: ${props.theme.OceanBlue};
    border-radius: 10px;

    &:hover {
      color: ${props.theme.white};
      background-color: ${props.theme.OceanBlue};
    }
`}
`

export const BackActionBarContainer = styled(MainContainer)`
  min-height: 48px;
  margin-bottom: 0;
  margin-top: 0 !important;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
    margin-bottom: 0;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
    margin-bottom: 0;
  }
`

export const BackActionBarSection = styled.button`
  box-shadow: none;
  min-height: 48px;
  padding: 18px 0 10px;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  border: none;
  width: 40%;
  outline: none;

  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    width: 50%;
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    width: 65%;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.stoneExtraLight};
  }
`

export const BackActionBar = styled.div`
  background-color: ${(props) => props.theme.white};
  border-bottom: 0.5px solid ${(props) => props.theme.stoneLight};
  position: fixed;
  width: 100%;
  z-index: 9;
  top: 60px;
`

export const ButtonPrimaryAndroid = styled.button`
  width: 100%;
  margin: 24px 0 ${(props) => (props.marginBottom || '0')};
  background-color: ${(props) => (props.isDisabled === 'Y' ? props.theme.disabledStone40 : props.theme.OceanBlue)};
  color: ${(props) => (props.theme.white)};
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: ${getSemiboldFontFamily()} !important;
  padding: ${(props) => (props.isSubmitting === 'Y' ? '9px 12px 5px' : '12px')};
  cursor: pointer;
  ${styleVars.app.isMobileApp && css`
    border-radius: 2px;
    text-transform: uppercase;
    padding: ${(props) => (props.isSubmitting === 'Y' ? '7px 12px' : '12px')};
  `}

  &:disabled {
    cursor: not-allowed;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => (props.isDisabled === 'Y' ? props.theme.disabledStone40 : props.theme.lightOceanBlue)};
  }
`

export const PaddingBreakpoint = css`
  @media screen and (max-width: ${styleVars.container.breakpoint.sm}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.sm};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.sm};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    padding-left: ${styleVars.sectionContainer.paddingHorizontal.xs};
    padding-right: ${styleVars.sectionContainer.paddingHorizontal.xs};
  }
`

export const SectionStyle = styled.div`
  ${PaddingBreakpoint}
`


/* stylelint-disable value-list-max-empty-lines value-keyword-case */
export const RowTitle = styled(Row)`
  padding-top: ${(props) => (props.paddingTop || 'inherit')};
  padding-bottom: ${(props) => (props.paddingBottom || '11px')};
  font-weight: ${(props) => (props.fontWeight || 'normal')};
  margin: 0;
  border-bottom:
    ${(props) => (
    props.noBorder ? 'none'
      : `${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${styleVars.app.isIOS ? props.theme.lightGray : props.theme.stoneLight}`
  )};
  border-top:
    ${(props) => (
    props.borderTop
      // eslint-disable-next-line no-nested-ternary
      ? `${styleVars.app.isMobile ? '0.5px' : '1px'} solid ${props.error ? props.theme.red : styleVars.app.isIOS ? props.theme.lightGray : props.theme.stoneLight}`
      : 'none'
  )};
  ${(props) => props.grayBackground && css`
    background-color: ${props.theme.gray};
  `}
  ${(props) => props.whiteBackground && css`
    background-color: ${props.theme.lightBlack};
  `}
`

export const GridRow = styled(RowTitle)`
  padding-top: ${(props) => (props.paddingTop || '12px')};
  padding-left: ${(props) => (props.paddingLeft || '0')};
  margin-bottom: ${(props) => (props.endSection ? '56px' : 0)};
  color: ${(props) => (styleVars.app.isMobileApp && styleVars.app.isIOS && props.theme.black)};
`

export const StyledLink = styled.button.attrs({
  type: 'button',
  role: 'link',
})`
  display: block;
  width: 100%;
  color: inherit;
  cursor: pointer;
  text-decoration: inherit !important;
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
  align-items: inherit;
  text-align: inherit;
  ${styleVars.app.isIOS && css`
    background: ${(props) => (props.theme.lightBlack)};
    color: ${(props) => (props.theme.primaryStone)};
  `}
  ${styleVars.app.isAndroid && css`
    color: ${(props) => (props.theme.primaryStone)};

    span {
      line-height: 1.1;
    }
  `}
  ${(props) => props.endSection && css`
    margin-bottom: ${styleVars.app.isAndroid ? '40px' : '56px'};
  `}
  ${(props) => !props.endSection && css`
    margin-bottom: 0;
  `}
  ${(props) => props.disabled && css`
    cursor: not-allowed;
  `}
  ${(props) => !props.noHover && !styleVars.app.isIOS && css`
    &:hover {
      background-color: ${props.theme.stoneExtraLight};
    }
  `}
  ${(props) => !props.noFocus && css`
    &:focus {
      background-color: ${props.theme.stoneExtraLight};
    }
  `}

  &:hover {
    background-color: ${(props) => props.theme.stoneExtraLight};
  }
`

export const InlineActionLink = styled(StyledLink)`
color: ${(props) => (props.theme.oceanBlue)};
display: inline-block;
width: auto;
-webkit-tap-highlight-color: transparent;
${styleVars.app.isIOS && css`
    background: transparent;
`}

&:hover,
&:focus {
  background-color: ${(props) => (styleVars.app.isIOS ? 'transparent' : props.theme.white)};
  ${!styleVars.app.isIOS && css`
      text-decoration: underline !important;
`}
}
`

export const LinkNewTab = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  color: ${(props) => props.theme.oceanBlue};
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.white};
    ${!styleVars.app.isIOS && css`
      text-decoration: underline !important;
    `}
  }
`

export const GridColumn = styled(Col)`
  padding-top: ${(props) => props.paddingTop || '16px'};
  padding-left: ${(props) => props.paddingLeft || '16px'};
  padding-right: ${(props) => props.paddingRight || '16px'};
`

export const GridColHeader = styled(GridColumn)`
${!styleVars.app.isMobileApp && css`
    padding: 0;
`}
`

export const ColDisplayRight = styled(GridColumn)`
  text-align: right;
  padding-top: 0;

  @media screen and (min-width: ${styleVars.container.breakpoint.md}) {
    text-align: ${(props) => (props.alignLeftMD ? 'left' : 'right')};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.md}) {
    text-align: ${(props) => (props.alignLeftSM ? 'left' : 'right')};
  }

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    text-align: ${(props) => (props.alignLeftXS ? 'left' : 'right')};
  }
`

export const FixedCol = styled.div`
  width: 86%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    width: 82%;
  }
`

export const InputWrapper = styled.div`
  min-height: ${(props) => (props.minHeight || 'auto')};

  label {
    margin-bottom: 4px;
  }

  input {
    padding-top: 2px;

    &[type=password] {
      ${isIE() || styleVars.app.isMobileApp ? { ...defaultFont } : { ...largeFont }}
      color: ${(props) => props.theme.primaryStone};
    }
  }

  span {
    top: -1px;
  }
`

export const IOSInputWrapper = styled.div`
  ${(props) => (
    !props.noBorderTop && css`
      border-top: 1px solid ${styleVars.app.isMobileApp ? props.theme.lightGray : props.theme.red};
    `
  )}
  ${(props) => (
    !props.noBorderBottom && css`
      border-bottom: 1px solid ${styleVars.app.isMobileApp ? props.theme.lightGray : props.theme.green};
    `
  )}
  padding: 8px 16px 13px;
  background: ${(props) => props.theme.lightBlack};
`

export const IOSInputStyle = css`
  ${{ ...mediumFont }}
  background-color: ${(props) => props.theme.lightBlack};
  width: 100%;
  border: none;
  color: ${(props) => props.theme.primaryStone};

  &:disabled {
    color: ${(props) => props.theme.disabledStone40};
    -webkit-text-fill-color: ${(props) => props.theme.disabledStone40};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`

export const inputStyle = css`
  color: ${(props) => props.theme.inputColor};
  border-color: ${(props) => props.theme.disabledStone40};
    
  &:focus {
    border-color: ${(props) => props.theme.inputBorderPem};
  }

  &:hover {
    border-color: ${(props) => props.theme.inputBorderPem};
  }
`

export const SelectWrapper = styled.div`
  div > div {
    padding-top: ${(props) => (props.isLable ? 4 : 0)}px;

    svg {
      top: ${(props) => (props.isLable ? 4 : 0)}px;
    }
  }

  label {
    position: inherit;
  }

  select {
    padding-top: 2px;
  }
`

export const InlineButton = styled.button.attrs({
  type: 'button',
})`
  display: inline-block;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }

  ${styleVars.app.isIOS && css`
    font: ${defaultFont.font};
    font-weight: bold;
  `}
`

export const ClearButton = styled(InlineButton)`
  &:focus,
  &:hover {
    outline: none;

    svg {
      color: ${(props) => props.theme.oceanBlue} !important;
    }
  }
`

export const DangerButton = styled(InlineButton)`
${!styleVars.app.isMobileApp && css`
    padding: 3px 16px 5px 16px;
    border: 1px solid ${(props) => props.theme.red};
    border-radius: 4px;
`}
color: ${(props) => props.theme.red};

&:focus,
&:hover {
  ${!styleVars.app.isMobileApp && css`
      background-color: ${(props) => props.theme.redBlured};
`}
  outline: none;
}
`

export const SpinnerContainer = styled.div`
  text-align: center;
`

export const GridSecondColumn = styled(GridColumn)`
  padding-top: ${styleVars.app.isMobileApp ? 0 : '24px'};
`

export const InputSection = styled.div`
  margin-bottom: ${(props) => (props.marginBottom || '34px')};
  min-height: ${(props) => (props.minHeight || 'auto')};

  @media screen and (max-width: ${styleVars.container.breakpoint.xs}) {
    margin-bottom: ${(props) => (props.marginBottom || '20px')};
    min-height: auto;
  }
`

export const VisibleForScreenReaders = styled.div`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-clip-path: polygon(0 0, 0 0, 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: none;
`

export const GridRowCenterAligned = styled(GridRow)`
  align-items: center;
`
export const CardImg = styled.img`
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};
  height: ${(props) => (props.size ? props.size : '48px')};
  width: ${(props) => (props.size ? props.size : '48px')};

  @media all and (-ms-high-contrast: none) {
    & {
      width: auto;
    }
  }
`

export const FragmentContainer = styled.div`
  display: ${props => (props.display ? props.display : 'inherit')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '0px')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '0px')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '0px')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '0px')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'inherit')};
  font-size: ${props => (props.fontSize ? props.fontSize : 'inherit')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 'inherit')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'inherit')};
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : 'none')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'normal')};
`
