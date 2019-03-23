
import React from 'react'

import Result from '#components/check-in/result'

import { navigate } from '#utils/navigator-service'

const ResultScreen = () => (
  <Result
    onInsight={() => navigate('insight')}
    onBackHome={() => navigate('home')}
  />
)

ResultScreen.navigationOptions = {
  title: 'ResultScreen',
}

export default ResultScreen