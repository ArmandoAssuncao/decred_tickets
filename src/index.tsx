import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Root } from 'containers'
import { Root as NativeBaseContainer } from 'native-base'
import darkTheme from 'config/theme/dark'
import { getRemSize } from 'config/theme/size'
import moment from 'moment'
import 'moment/locale/pt-br'

import 'config/reactotron'
import { getLanguage } from 'helpers/languageDetector'
import configureStore from 'store'

const { store, persistor } = configureStore()

// locale
moment.locale(getLanguage())
// theme
EStyleSheet.build({
    ...darkTheme,
    $rem: getRemSize(),
})

class App extends Component<any, any> {

    private renderLoading = (): JSX.Element => {
        return null
    }

    render(): JSX.Element {
        return (
            <NativeBaseContainer>
                <Provider store={ store }>
                    <PersistGate loading={ this.renderLoading() } persistor={ persistor }>
                        <Root />
                    </PersistGate>
                </Provider>
            </NativeBaseContainer>
        )
    }
}

export default App
