
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

const Home = ({
  onInsightSelect,
  onCheckInSelect,
}) => (
  <View style={styles.container}>
    <Button
      onPress={onCheckInSelect}
      title="Check In"
    />
    <Button
      onPress={onInsightSelect}
      title="Insight"
    />
  </View>
)

Home.defaultProps = {
}

Home.propTypes = {
  onInsightSelect: PropTypes.func.isRequired,
  onCheckInSelect: PropTypes.func.isRequired,
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

export default Home