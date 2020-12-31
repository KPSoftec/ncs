import React from 'react'

import {
  FooterContainer, FooterSection, FooterStyle,
} from './styles'
import { MainContainer, SectionStyle } from '../../style/styles'
import { SmallFont, License } from '../../style/content.styles'

const currentYear = new Date().getFullYear()
const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <MainContainer marginTop={0} marginBottom={0}>
        <FooterStyle>
          <SectionStyle data-test-id="footer-details">
            <SmallFont>
              &copy; KPSoftec INDIA (Karan Khilwani)
              {' '}
              {currentYear}
              {' '}
              <License>XXXXXXXXXXXXXXXX</License>
            </SmallFont>
          </SectionStyle>
        </FooterStyle>
      </MainContainer>
    </FooterSection>
  </FooterContainer>
)

export default Footer
