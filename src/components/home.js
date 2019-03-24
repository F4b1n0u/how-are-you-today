
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
    <Button
      onPress={onGoToCheckIn}
      title="Check In"
    />
    <Button
      onPress={onGoToInsight}
      title="Insight"
    />
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
  justify-content: flex-start;
  background-color: ${({ theme: { background } }) => background};
`

export default Home