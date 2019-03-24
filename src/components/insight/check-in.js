
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const CheckIn = ({
  style,
  timestamp,
  mood,
  feelings,
  comment,
}) => {
  return (
    <StyledCheckIn style={style}>
      <Text>{timestamp} {mood} {comment}</Text>
      {feelings.map( feeling => (
        <Text
          key={feeling}
        >
          {feeling}
        </Text>
      ))}
    </StyledCheckIn>
  )
}

CheckIn.defaultProps = {
  comment: null,
}

CheckIn.propTypes = {
  timestamp: PropTypes.number.isRequired,
  mood: PropTypes.number.isRequired,
  feelings: PropTypes.arrayOf(PropTypes.string).isRequired,
  comment: PropTypes.string,
}

const StyledCheckIn = styled.View`
`

export default CheckIn