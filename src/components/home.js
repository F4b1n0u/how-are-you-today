
import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Home = ({
  style,
  onGoToInsight,
  onGoToCheckIn,
}) => (
  <Container style={style}>
    <StyledButton
      onPress={onGoToCheckIn}
    >
      <Label>
        {'Check In'}
      </Label>
    </StyledButton>
    <StyledButton
      onPress={onGoToInsight}
    >
      <Label>
        {'Insight'}
      </Label>
    </StyledButton>
  </Container>
)

Home.defaultProps = {
}

Home.propTypes = {
  onGoToInsight: PropTypes.func.isRequired,
  onGoToCheckIn: PropTypes.func.isRequired,
}

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { background } }) => background};
`

const StyledButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: .8,
}))`
  height: 30%;
  width: 70%;
  background-color: ${({ theme: { box } }) => box};

  justify-content: center;
  align-items: center;
  border-radius: 10;
`

const Label = styled.Text`
  font-size: 50;
  color: ${({ theme: { highlight } }) => highlight};
`

export default Home