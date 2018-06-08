import { NavigationActions, StackActions } from 'react-navigation'

export const resetNavigateTo = (routeName: string, dispatch) => {
    const actionToDispatch = StackActions.reset({
        actions: [NavigationActions.navigate({ routeName })],
        index: 0,
        key: null,
    })
    dispatch(actionToDispatch)
}
