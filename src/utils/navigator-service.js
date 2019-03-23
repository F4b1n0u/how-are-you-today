import { NavigationActions } from 'react-navigation'

NavigationActions.re

let _navigator

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

export function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}
