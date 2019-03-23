
import React from 'react'

import FeelingSelection from '#components/check-in/feeling-selection'

const FeelingsSelectionScreen = ({
   navigation,
}) => (
  <FeelingSelection 
    onNext={() => navigation.navigate('comment')}
  />
)

FeelingsSelectionScreen.navigationOptions = {
  title: 'FeelingsSelectionScreen',
}

export default FeelingsSelectionScreen
