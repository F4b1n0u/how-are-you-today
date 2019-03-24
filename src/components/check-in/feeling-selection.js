
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
  constructor(props) {
    super(props)

    this.state = {
      ...props.previousFormState,
      feelings: [],
    }
  }

  _handlePressFeelings = ({ label }) => {
    const {
      feelings,
    } = this.state

    const isSelected = feelings.indexOf(label) !== -1

    if (isSelected) {
      this.setState({
        feelings: feelings.filter(selectedFeeling => selectedFeeling !== label),
      })
    } else {
      this.setState({
        feelings: [ ...feelings, label ],
      })
    }
  }

  _handlePressNext = () => {
    const {
      onNext,
    } = this.props
    
    onNext(this.state)
  }

  render() {
    const {
      feelings: allFeelings,
    } = this.props

    const {
      feelings,
    } = this.state

    const data = allFeelings.map(feeling => ({
      key: feeling,
      label: feeling,
      isSelected: feelings.indexOf(feeling) !== -1
    }))

    const canGoNext = !isEmpty(feelings)

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

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme: { background } }) => background};
`

export default FeelingsSelection
