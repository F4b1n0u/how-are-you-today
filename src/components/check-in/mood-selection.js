
import React , { PureComponent } from 'react'
import { Button, Text } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'
import Slider from 'react-native-slider'
import styled from 'styled-components/native'

class MoodSelection extends PureComponent {
  state = {
    mood: 5,
  }

  _handleMoodChange = (mood) => {
    this.setState({
      mood,
    })
  }

  _handlePressNext = () => {
    const {
      onNext,
    } = this.props
    
    onNext(this.state)
  }

  render() {
    const {
      mood,
    } = this.state

    return (
      <Container>
        <Mood>
          {mood}
        </Mood>
        <Slider
          minimumValue={1}
          maximumValue={7}
          step={1}
          value={mood}
          onValueChange={this._handleMoodChange}
        />
        <Button
          onPress={this._handlePressNext}
          title="Next"
        /> 
      </Container>
    )
  }
}

MoodSelection.defaultProps = {
}

MoodSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
}

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme: { background } }) => background};
`

const Mood = styled.Text`
  font-family: moods;
  font-size: 200;
`

export default MoodSelection