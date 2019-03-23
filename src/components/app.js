import React from 'react';
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'

import { setTopLevelNavigator } from '#utils/navigator-service'
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
      isLoading,
      children,
    } = this.props

    return isLoading ? (
      <AppLoading />
    ) : (
      <AppNavigator
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
}

export default App 