
import React, { PureComponent } from 'react'
import { Button, Text, ActivityIndicator } from 'react-native'
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
      style,
      isSavingCheckIn,
      savingCheckInError,
    } = this.props

    return (
      <Container style={style}>
        {isSavingCheckIn && (
          <StyledActivityIndicator
            size="large"
            color="#19A5B0"
          />
        )}

        {(!isSavingCheckIn && !savingCheckInError) && (
          <Outcome>
            {'done !!!'}
          </Outcome>
        )}
        
        {(!isSavingCheckIn && savingCheckInError) && (
          <Button
            onPress={this._handleSaveCheckIn}
            title="failed !!!!, try again"
          />
        )}
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

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { background } }) => background};
  padding-horizontal: 20;
  padding-vertical: 20;
`

const StyledActivityIndicator = styled(ActivityIndicator).attrs(({ theme: { highlight } }) => ({
  color: highlight,
  size: 'large',
}))`
`

const Outcome = styled.Text`
  font-size: 100;
  color: ${({ theme: { highlight } }) => highlight};
`


export default Result