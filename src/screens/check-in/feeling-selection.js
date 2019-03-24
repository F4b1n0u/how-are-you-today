import React from 'react'
import styled from 'styled-components/native'

import FeelingSelection from '#containers/check-in/feeling-selection'

const FeelingsSelectionScreen = ({
   navigation,
}) => (
  <FeelingSelection 
    previousFormState={navigation.getParam('formState')}
    onNext={formState => navigation.navigate('comment', { formState })}
  />
)

FeelingsSelectionScreen.navigationOptions = {
  title: 'FeelingsSelectionScreen',
}

export default FeelingsSelectionScreen
