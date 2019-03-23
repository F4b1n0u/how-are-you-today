
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

const Result = ({
  onBackHome,
  onInsight,
}) => (
  <View style={styles.container}>
    <Button
      onPress={onInsight}
      title="insight"
    />
    <Button
      onPress={onBackHome}
      title="home"
    />
  </View>
)

Result.defaultProps = {
}

Result.propTypes = {
  onBackHome: PropTypes.func.isRequired,
  onInsight: PropTypes.func.isRequired,
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

export default Result