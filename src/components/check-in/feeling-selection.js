
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

const FeelingsSelectionScreen = ({
   onNext,
}) => (
  <View style={styles.container}>
    <Button
      onPress={onNext}
      title="comment"
    />
  </View>
)

FeelingsSelectionScreen.defaultProps = {
}

FeelingsSelectionScreen.propTypes = {
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

export default FeelingsSelectionScreen
