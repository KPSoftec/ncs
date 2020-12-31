import React from 'react'
import {
  AppContainer,
  AppLayoutContainer,
} from './styles'

import {
  Grid, GridRow,
  GridColumn, SmallSectionContainer,
} from '../../style/styles'

const items = new Array(100).fill(1)
const Welcome = () => (
  <AppLayoutContainer>
    <AppContainer>
      <Grid>

        <GridRow noBorder>

          {items.map((item, index) => (
            <GridColumn xs={6} sm={6} md={4} lg={3} data-test-id="column-1" key={`item-${item + index}`}>
              <SmallSectionContainer minHeight="auto">
                <h1 data-test-id="app-title">
                  Welcome to React This is a dummy Heading Here is the dummy text
                  {' '}
                  {item}
                </h1>
              </SmallSectionContainer>
            </GridColumn>
          ))}

        </GridRow>

      </Grid>
    </AppContainer>
  </AppLayoutContainer>
)

export default Welcome
