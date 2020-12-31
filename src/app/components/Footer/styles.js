import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
`

export const FooterSection = styled.div`
  width: 100%;
  background-color: ${(props) => (props.theme.kpsHeader)};
  color: ${(props) => (props.theme.whitePerm)};
  padding-top: 32px;
  padding-bottom: 32px;
`

export const FooterStyle = styled.span`
  color: ${(props) => (props.theme.whitePerm)};
`
