/*
 * @flow
 */

import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'

const store = configureStore()

const rn2017 = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('rn2017', () => rn2017)
