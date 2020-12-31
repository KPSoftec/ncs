import styled, { keyframes } from 'styled-components'
import LogoLight from '../../../assets/img/lightmode/we_are_kps.png'
import LogoBlack from '../../../assets/img/darkmode/we_are_kps_dark.png'

export const AppLayoutContainer = styled.div`
  text-align: center;
`

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LogoIcon = styled.img.attrs((props) => ({
  src: props.theme.mode === 'light' ? LogoLight : LogoBlack,
}))`
  height: 32vmin;
  pointer-events: none;
`;

export const SpinLogo = styled.img`
  height: 32vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoSpin} infinite 20s linear;
  }
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export const AppLink = styled.a`
  color: ${props => (props.theme.htmlLink)};
`
