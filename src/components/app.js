import React from 'react';
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'

import AppNavigator from '#navigators/app'

class App extends React.Component {
  componentWillMount() {
    const {
      startLoading,
    } = this.props

    startLoading()
  }
  
  render() {
    const {
      style,
      isLoading,
    } = this.props

    return isLoading ? (
      <AppLoading style={style} />
    ) : (
      <AppNavigator style={style}/>
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
}

export default App 