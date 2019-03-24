
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
      style,
    } = this.props

    const {
      comment,
    } = this.state

    return (
      <Container style={style}>
        <CommentInput
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

const CommentInput = styled.TextInput.attrs(() => ({
  multiline: true,
  numberOfLines: 4,
}))`
  width: 90%;
  height: 30%;
  background-color: ${({ theme: { box } }) => box};
  margin-top: 20;
  margin-bottom: 20;
`

export default Comment