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
  isLoaded: false,
}

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
}

export default App 