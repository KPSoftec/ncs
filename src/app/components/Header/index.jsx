import React from 'react'
import Grid from '@material-ui/core/Grid'

import {
  HeaderContainer, HeaderSection, Logo, LogoutButton, HeaderButton,
  CheckBoxWrapper, CheckBox, CheckBoxLabel, FullTextGrid, SmallTextGrid,
} from './styles'
import LogoSvg from '../../../assets/img/header_icon_kps.png'
import { MainContainer, SectionStyle } from '../../style/styles'
import { propTypes, defaultProps } from './types'

const Header = ({
  logOut,
  noLogOut,
  showThemeSwitch,
  theme,
  onChecked,
  onUnChecked,
}) => {
  const [state, setState] = React.useState({
    themeSwitch: theme.mode.toLowerCase() !== 'dark',
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    if (state.themeSwitch) {
      onChecked()
    } else {
      onUnChecked()
    }
  }
  return (
    <HeaderContainer>
      <HeaderSection>
        <MainContainer marginTop={0} marginBottom={0}>
          <SectionStyle>
            <Logo aria-label="A N Z Logo" data-test-id="header-logo" src={LogoSvg} alt="Logo" />
            {
              noLogOut ? ''
                : <LogoutButton data-test-id="logout-button" onClick={logOut}>Logout</LogoutButton>
            }
            {
              showThemeSwitch ? (
                <HeaderButton>
                  <Grid component="label" container alignItems="center" spacing={1}>
                    <FullTextGrid item>DARK</FullTextGrid>
                    <SmallTextGrid item>D</SmallTextGrid>
                    <Grid item>
                      <CheckBoxWrapper>
                        <CheckBox id="checkbox" type="checkbox" checked={state.themeSwitch} onChange={handleChange} name="themeSwitch" data-test-id="themeSwitch" />
                        <CheckBoxLabel htmlFor="checkbox" />
                      </CheckBoxWrapper>
                    </Grid>
                    <SmallTextGrid item>L</SmallTextGrid>
                    <FullTextGrid item>LIGHT</FullTextGrid>
                  </Grid>
                </HeaderButton>
              )
                : ''
            }
          </SectionStyle>
        </MainContainer>
      </HeaderSection>
    </HeaderContainer>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
