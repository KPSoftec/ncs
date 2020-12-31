/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import AppThemePalette from '../AppThemePalette'
import HeaderComponent from '../Header'
import FooterComponent from '../Footer'
import {
  AppLayoutContainer, BackgroundContainer, MainContainer, MainSection,
} from '../../style/styles'

import styleVars, { darkColor, lightColor, isDarkTheme } from '../../style/global'

const AppContainer = ({ children }) => {
  const [theme, setTheme] = useState(isDarkTheme())

  const setDarkTheme = () => setTheme(darkColor)
  const setLightTheme = () => setTheme(lightColor)

  useEffect(() => {
    if (!styleVars.app.isIEOrEdge) {
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => e.matches && setDarkTheme())
      window.matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (e) => e.matches && setLightTheme())
    } else {
      // do nothing
    }
  })

  return (
    <AppThemePalette theme={theme}>
      <AppLayoutContainer>
        <HeaderComponent noLogOut showThemeSwitch onChecked={setDarkTheme} onUnChecked={setLightTheme} theme={theme} />
        <MainSection>
          <BackgroundContainer>
            <MainContainer>
              {children}
            </MainContainer>
          </BackgroundContainer>
        </MainSection>
        <FooterComponent />
      </AppLayoutContainer>
    </AppThemePalette>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContainer
