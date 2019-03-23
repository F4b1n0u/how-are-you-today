
import React from 'react'

import Result from '#components/check-in/result'

import { replace } from '#utils/navigator-service'

const ResultScreen = () => (
  <Result
    onInsight={() => replace('insight')}
    onBackHome={() => replace('home')}
  />
)

ResultScreen.navigationOptions = {
  title: 'ResultScreen',
}

export default ResultScreen