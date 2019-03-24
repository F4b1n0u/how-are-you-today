
import React from 'react'

import Home from '#components/home'

const HomeScreen = ({ navigation }) => (
  <Home
    onGoToInsight={() => navigation.navigate('insight')}
    onGoToCheckIn={() => navigation.navigate('checkIn')}
  />
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen