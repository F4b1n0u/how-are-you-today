import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, View } from 'react-native'

const Insight = () => (
  <View style={styles.container}>
  </View>
)

Insight.defaultProps = {
}

Insight.propTypes = {
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

export default Insight
