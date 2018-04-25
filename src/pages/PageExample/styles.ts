import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '$bgColor',
        flex: 1,
        justifyContent: 'center',
    } as ViewStyle,
})
