
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

const MoodSelection = ({
  onNext,
}) => (
  <View style={styles.container}>
    <Button
      onPress={onNext}
      title="feelings"
    />
  </View>
)

MoodSelection.defaultProps = {
}

MoodSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: '#000000',
    fontSize: 70,
  },
});

export default MoodSelection