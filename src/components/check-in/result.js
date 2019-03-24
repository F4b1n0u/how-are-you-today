
import React, { PureComponent } from 'react'
import { Button, Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

class Result extends PureComponent {
  componentWillMount() {
    this._handleSaveCheckIn()
  }

  _handleSaveCheckIn = () => {
    const {
      saveCheckIn,
      checkIn,
    } = this.props

    saveCheckIn(checkIn)
  }

  render() {
    const {
      onBackHome,
      onInsight,
      isSavingCheckIn,
      savingCheckInError,
      saveCheckIn,
    } = this.props

    return (
      <Container>
        <Text>
          {isSavingCheckIn && (
            'saving...'
          )}
        </Text>
        <Text>
          {(!isSavingCheckIn && !savingCheckInError) && 'done !!!'}
        </Text>
        
        {(!isSavingCheckIn && savingCheckInError) && (
          <Button
            onPress={this._handleSaveCheckIn}
            title="failed !!!!, try again"
          />
        )}
        
        <Button
          onPress={onInsight}
          title="insight"
        />
        <Button
          onPress={onBackHome}
          title="home"
        />
      </Container>
    )
  }
}

Result.defaultProps = {
  isSavingCheckIn: true,
  savingCheckInError: null,
}

Result.propTypes = {
  isSavingCheckIn: PropTypes.bool,
  savingCheckInError: PropTypes.object,

  saveCheckIn: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired,
  onInsight: PropTypes.func.isRequired,
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default Result