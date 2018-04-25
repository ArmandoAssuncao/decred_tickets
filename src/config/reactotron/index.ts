if (process.env.NODE_ENV === 'development') {
    const {
        trackGlobalErrors,
        openInEditor,
        overlay,
        asyncStorage,
        networking,
    } = require('reactotron-react-native')
    const Reactotron: any = require('reactotron-react-native').default
    const { reactotronRedux } = require('reactotron-redux')
    const env = require('../../../__env__/development.json')

    const tron = Reactotron
        .configure({
            host: env.REACTOTRON_HOST,
        })
        .useReactNative()
        .use(reactotronRedux())
        .use(trackGlobalErrors())
        .use(openInEditor())
        .use(overlay())
        .use(asyncStorage())
        .use(networking())
        .connect()

    tron.clear()

    global.reactotron = tron
}
