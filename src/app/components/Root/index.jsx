import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'
import AppContainer from '../AppContainer'

import Welcome from '../Welcome'

const Root = () => (
  <Provider store={store}>
    <AppContainer>
      <Welcome />
    </AppContainer>
  </Provider>
)

export default Root
