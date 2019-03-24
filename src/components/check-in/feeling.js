
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';

const Feeling = ({
  style,
  label,
  isSelected,
}) => {
  return (
    <StyledFeeling
      style={style}
    >
      <Label>{label}</Label>
      {isSelected && (
        <Mark />
      )}
    </StyledFeeling>
  )
}

Feeling.defaultProps = {
  isSelected: false,
}

Feeling.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
}

const StyledFeeling = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { box } }) => box};
  flex-direction: row;
`

const Label = styled.Text`
  font-size: 30;
`

const Mark = styled(Ionicons).attrs(() => ({
  name: 'ios-checkmark'
}))`
  font-size: 100;
  color: ${({ theme: { highlight } }) => highlight};

  position: absolute;
  right: 30;
`

export default Feeling
