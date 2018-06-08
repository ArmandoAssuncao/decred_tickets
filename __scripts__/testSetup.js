/*jshint esversion: 6 */

import 'rxjs'
import { NativeModules } from "react-native"
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EStyleSheet from 'react-native-extended-stylesheet'
import darkTheme from 'config/theme/dark'

configure({ adapter: new Adapter() })

jest.useFakeTimers()

jest.mock('WebView', () => 'WebView')

global.alert = jest.fn()

// Set default theme for tests
EStyleSheet.build(darkTheme)

NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn(),
}
NativeModules.I18nManager = {
    ...NativeModules.I18nManager,
    localeIdentifier: 'en',
}
NativeModules.SettingsManager = {
    ...NativeModules.SettingsManager,
    settings: {
        AppleLocale: 'en',
    },
}

jest.mock('Linking', () => {
  const getInitialURL = jest.fn()
  getInitialURL.mockReturnValueOnce({then: jest.fn()})

  return {
    addEventListener: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL,
    openURL: jest.fn(),
    removeEventListener: jest.fn(),
  }
})

jest.mock('moment', () => {
    const newDate = Date.UTC(2010, 0, 2, 0, 0, 0, 0).valueOf()
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => newDate)
    const moment = require.requireActual('moment')
    return moment
});
