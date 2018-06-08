import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        backgroundColor: '#2971FF', // get color from theme
        justifyContent: 'center',
        marginLeft: 10,
        paddingHorizontal: 15,
    } as ViewStyle,
})
