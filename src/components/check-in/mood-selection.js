
import React , { PureComponent } from 'react'
import { Button } from 'react-native'
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
      style,
      mood,
    } = this.state

    return (
      <Container style={style}>
        <Mood>
          {mood}
        </Mood>
        <StyledSlider
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
  justify-content: center;
  background-color: ${({ theme: { background } }) => background};
  padding-horizontal: 20;
  padding-vertical: 20;
`

const Mood = styled.Text`
  font-family: moods;
  font-size: 200;
  color: ${({ theme: { highlight } }) => highlight};
`

const StyledSlider = styled(Slider)`
  width: 80%;
`

export default MoodSelection