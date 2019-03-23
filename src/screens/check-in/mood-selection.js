
import React from 'react'

import MoodSelection from '#components/check-in/mood-selection'

const MoodSelectionScreen = ({
  navigation,
}) => (
  <MoodSelection
    onNext={() => navigation.navigate('feelingSelection')}
  />
)

MoodSelectionScreen.navigationOptions = {
  title: 'MoodSelectionScreen',
}

export default MoodSelectionScreen