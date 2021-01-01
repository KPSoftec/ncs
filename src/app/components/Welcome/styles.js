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

export const Logo = styled.img`
  width: 120px;
  height: 120px;
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

export const Wrap = styled.div`
  width: 30%;
  position: absolute;
  top: 15%;
  left: 25%;
  transform: translate(-50%, -50%);
`

export const WrapRight = styled.div`
  width: 30%;
  position: absolute;
  top: 15%;
  left: 75%;
  transform: translate(-50%, -50%);
`

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`

export const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000;
`

export const FilterTerm = styled.select`
  width: 100%;
  border: 3px solid #00b4cc;
  padding: 5px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  color: #000;
`
