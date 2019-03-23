
import React, { PureComponent } from 'react'
import { Button, FlatList, Text, TouchableHighlight } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { isEmpty } from 'lodash'

const Feeling = ({
  label,
  isSelected,
}) => {
  return (
    <Text>{label} {isSelected ? 'x' : ''}</Text>
  )
}

Feeling.defaultProps = {
  isSelected: false,
}

Feeling.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
}

class FeelingsSelection extends PureComponent {
  state = {
    selectedFeelingLabels: [],
  }

  _handlePressFeelings = ({ label }) => {
    const {
      selectedFeelingLabels,
    } = this.state

    const isSelected = selectedFeelingLabels.indexOf(label) !== -1

    if (isSelected) {
      this.setState({
        selectedFeelingLabels: selectedFeelingLabels.filter(selectedFeeling => selectedFeeling !== label),
      })
    } else {
      this.setState({
        selectedFeelingLabels: [ ...selectedFeelingLabels, label ],
      })
    }
  }

  _handlePressNext = () => {
    const {
      onNext,
    } = this.props

    const {
      selectedFeelingLabels,
    } = this.state
    
    onNext(selectedFeelingLabels)
  }

  render() {
    const {
      feelings,
    } = this.props

    const {
      selectedFeelingLabels,
    } = this.state

    const data = feelings.map(feeling => ({
      key: feeling,
      label: feeling,
      isSelected: selectedFeelingLabels.indexOf(feeling) !== -1
    }))

    const canGoNext = !isEmpty(selectedFeelingLabels)

    return (
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={this._handlePressFeelings.bind(this, item)}
            >
              <Feeling
                {...item}
              />
            </TouchableHighlight>
          )}
        />
        <Button
          disabled={!canGoNext}
          onPress={this._handlePressNext}
          title="next"
        />
      </Container>
    )
  }
}

FeelingsSelection.defaultProps = {
}

FeelingsSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
  feelings: PropTypes.array.isRequired,
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${Constants.statusBarHeight};
`

export default FeelingsSelection
