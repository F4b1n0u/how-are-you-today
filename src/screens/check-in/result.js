import React from 'react'
import styled from 'styled-components/native'

import Result from '#containers/check-in/result'

const ResultScreen = ({ navigation }) => (
  <Result
    checkIn={navigation.getParam('formState')}
    onInsight={() => navigation.navigate('insight')}
    onBackHome={() => navigation.navigate('home')}
  />
)

ResultScreen.navigationOptions = {
  title: 'ResultScreen',
}

export default ResultScreen