import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import Home from './Home'
import TicketDetails from './TicketDetails'
import About from './About'

export const initialRoute = 'Home'
const home = createStackNavigator(
    {
        Home: { screen: Home },
        TicketDetails: { screen: TicketDetails },
        About: { screen: About },
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
    },
)
