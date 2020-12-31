import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalAppStyle from '../../style/global.styles'

const AppThemePalette = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalAppStyle />
    {children}
  </ThemeProvider>
)

AppThemePalette.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
}

export default AppThemePalette
