import React from 'react'
import styled from 'styled-components/native'

import Insight from '#containers/insight'

const InsightScreen = ({ navigation }) => (
  <Insight
    onGoToCheckIn={() => navigation.navigate('checkIn')}
  />
)

InsightScreen.navigationOptions = {
  title: 'Insight',
}

export default InsightScreen