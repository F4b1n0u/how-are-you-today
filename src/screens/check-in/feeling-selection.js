
import React from 'react'

import FeelingSelection from '#containers/check-in/feeling-selection'

const FeelingsSelectionScreen = ({
   navigation,
}) => (
  <FeelingSelection 
    onNext={params => navigation.navigate('comment', params)}
  />
)

FeelingsSelectionScreen.navigationOptions = {
  title: 'FeelingsSelectionScreen',
}

export default FeelingsSelectionScreen
