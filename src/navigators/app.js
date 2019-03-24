import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '#screens/home'
import Insight from '#screens/insight'
import CheckInNavigator from '#navigators/check-in'

const Navigator = createStackNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    insight: {
      screen: Insight,
    },
    checkIn: {
      screen: CheckInNavigator,
      navigationOptions: {
        title: 'check-in',
      },
    },
  }, {
    initialRouteName: 'home',
    mode: 'card',
  }
)

export default createAppContainer(Navigator)
