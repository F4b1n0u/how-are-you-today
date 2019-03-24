import { createStackNavigator, createAppContainer } from 'react-navigation'

import MoodSelection from '#screens/check-in/mood-selection'
import FeelingSelection from '#screens/check-in/feeling-selection'
import Comment from '#screens/check-in/comment'
import Result from '#screens/check-in/result'

const Navigator = createStackNavigator(
  {
    moodSelection: { screen: MoodSelection },
    feelingSelection: { screen: FeelingSelection },
    comment: { screen: Comment },
    result: { screen: Result },
  }, {
    initialRouteName: 'moodSelection',
    mode: 'card',
    headerMode: 'none',
  }
)

export default Navigator

