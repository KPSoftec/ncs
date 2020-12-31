import { createGlobalStyle } from 'styled-components'

const GlobalBodyStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, italo medium, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', italo-font, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, italo medium, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
export default GlobalBodyStyle
