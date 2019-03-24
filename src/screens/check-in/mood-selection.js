import React from 'react'
import styled from 'styled-components/native'

import MoodSelection from '#components/check-in/mood-selection'

const MoodSelectionScreen = ({
  navigation,
}) => (
  <MoodSelection
    onNext={formState => navigation.navigate('feelingSelection', { formState })}
  />
)

MoodSelectionScreen.navigationOptions = {
  title: 'MoodSelectionScreen',
}

export default MoodSelectionScreen