import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import TicketDetails from './TicketDetails'

export const initialRoute = 'Home'
export default createStackNavigator(
    {
        Home: { screen: Home },
        TicketDetails: { screen: TicketDetails },
    },
    {
        initialRouteName: initialRoute,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#596D81', // TODO: get from theme
            },
            headerTintColor: '#fff', // TODO: get from theme
        },
    },
)
