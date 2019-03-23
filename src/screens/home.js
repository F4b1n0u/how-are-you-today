
import React from 'react'

import Home from '#components/home'

const HomeScreen = ({ navigation }) => (
  <Home
    onInsightSelect={() => navigation.navigate('insight')}
    onCheckInSelect={() => navigation.navigate('checkIn')}
  />
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen