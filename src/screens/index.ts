import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import About from './About'
import Home from './Home'
import Settings from './Settings'
import TicketDetails from './TicketDetails'

export const initialRoute = 'Home'
const home = createStackNavigator(
    {
        Home: { screen: Home },
        About: { screen: About },
        Settings: { screen: Settings },
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

export default createDrawerNavigator(
    {
        Home: { screen: home },
        About: { screen: About },
        Settings: { screen: Settings },
    },
)
