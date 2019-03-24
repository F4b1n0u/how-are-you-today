
import React, { PureComponent } from 'react'
import { Button, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

class Comment extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      ...props.previousFormState,
      comment: ''
    }
  }
  
  _handleCommentChange = (comment) => {
    this.setState({
      comment,
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
      onNext,
    } = this.props

    const {
      comment,
    } = this.state

    return (
      <Container>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={this._handleCommentChange}
          value={comment}
          placeholder="Type your optional note here ..."
        />
        <Button
          onPress={this._handlePressNext}
          title="submit"
        />
      </Container>
    )
  }
}

Comment.defaultProps = {
}

Comment.propTypes = {
  onNext: PropTypes.func.isRequired,
}

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme: { background } }) => background};
`

export default Comment