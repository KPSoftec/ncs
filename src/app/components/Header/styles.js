import styled, { css } from 'styled-components'
import Grid from '@material-ui/core/Grid'

import { smallFont, getSemiboldFontFamily } from '../../style/global'

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 9;
  width: 100%;
  top: 0;
`

export const HeaderSection = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => (props.theme.kpsHeader)};
`

export const Logo = styled.img`
  width: 103px;
  height: 42px;
  margin-top: 5px;
  float: left;
`

const HeaderButtonStyle = css`
  ${{ ...smallFont }}
  padding: 9px 12px 7px;
  float: right;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${(props) => (props.theme.whitePerm)};
  border-radius: 4px;
  font-family: ${getSemiboldFontFamily()} !important;
`

export const LogoutButton = styled.button`
  ${HeaderButtonStyle}
  margin: 10px 0;
  width: 100px;
  background-color: ${(props) => (props.theme.oceanBluePerm)};

  &:focus,
  &:hover {
    background-color: ${(props) => (props.theme.lightOceanBlue)};
    color: ${(props) => (props.theme.white)};
    outline: none;
  }
`

export const HeaderButton = styled.span`
  ${HeaderButtonStyle}
  margin: 2px 0;
  width: auto;
  background-color: ${(props) => (props.theme.transparent)};

  @media screen and (max-width: 294px) {
    padding: 12px 0 0 0;
  }
`

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 0;
  width: 42px;
  height: 16px;
  border-radius: 16px;
  background: #bebebe;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 0;
    background: ${(props) => (props.theme.whitePerm)};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => (props.theme.lightOceanBlue)};

    &:after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

export const FullTextGrid = styled(Grid)`
  @media screen and (max-width: 270px) {
    display: none;
  }
`

export const SmallTextGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 270px) {
    display: block;
  }
`
