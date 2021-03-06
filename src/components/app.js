import React, { PureComponent } from 'react'
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'
import Introduction from '#containers/introduction'
import TodayQuote from '#containers/today-quote'

import SlashScreen from '#components/splash'
import Home from '#components/home'

class App extends PureComponent {
  componentWillMount() {
    const {
      startLoading,
    } = this.props
    
    startLoading()
  }

  render() {
    const {
      style,
      isLoaded,
      isIntroduced,
    } = this.props

    return isLoaded
      ? (
        <Container>
          <StyledSlashScreen />
          <Transition
            animateOnMount={true}
          >
            <StyledAnimatedHome
              key="home"
            >
              {
                isIntroduced
                  ? (
                    <TodayQuote />
                  )
                  : (
                    <Introduction />
                  )
              }
            </StyledAnimatedHome>
          </Transition>
        </Container>
      )
      : (
        <AppLoading style={style} />
      )
  }
}

App.defaultProps = {
  isLoaded: false,
  isIntroduced: false,
}

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  isIntroduced: PropTypes.bool,
}

// Animated

const AnimatedHome = posed(Home)({
  enter: {
    top: '0%',
    transition: {
      delay: 2000,
      duration: 1000,
      type: 'tween',
    },
  },
  exit: {
    top: '120%',
    transition: {
      duration: 500,
      type: 'tween',
    },
  },
})

// Styled components

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { background } }) => background};
`

const StyledSlashScreen = styled(SlashScreen)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledAnimatedHome = styled(AnimatedHome)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default App 