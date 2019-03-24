
import React, { PureComponent } from 'react'
import { Button, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { isEmpty } from 'lodash'

import Feeling from '#components/check-in/feeling'

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
      style,
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
      <Container style={style}>
        <FeelingList
          data={data}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={this._handlePressFeelings.bind(this, item)}
            >
              <StyledFeeling
                {...item}
              />
            </TouchableHighlight>
          )}
        />
        <Next
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

const FeelingList = styled.FlatList.attrs(() => ({
  ItemSeparatorComponent: styled.View`height: 10;`,
}))`
  flex: 1;
  width: 100%;
  padding-horizontal: 20;
  padding-vertical: 20;
`

const StyledFeeling = styled(Feeling)`
  height: 100;
  flex: 1;
`

const Next = styled(Button)`
  height: 200;
`

export default FeelingsSelection
