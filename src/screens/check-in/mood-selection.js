
import React from 'react'

import MoodSelection from '#components/check-in/mood-selection'

const MoodSelectionScreen = ({
  navigation,
}) => (
  <MoodSelection
    onNext={params => navigation.navigate('feelingSelection', params)}
  />
)

MoodSelectionScreen.navigationOptions = {
  title: 'MoodSelectionScreen',
}

export default MoodSelectionScreen