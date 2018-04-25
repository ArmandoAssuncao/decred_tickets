import { StackNavigator } from 'react-navigation'
import PageExample from './PageExample'

export const initialRoute = 'PageExample'
export default StackNavigator(
    {
        PageExample: { screen: PageExample },
    },
    { initialRouteName: initialRoute }
)
