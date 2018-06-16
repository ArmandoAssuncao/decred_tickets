import { Dimensions } from 'react-native'

export const getRemSize = () => {
    const { height } = Dimensions.get('window')
    if (height < 550) {
        return 14
    } else if (height < 600) {
        return 16
    } else if (height < 650) {
        return 17
    } else {
        return 19
    }
}
