
import React, { PureComponent } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
  state = {
    comment: ''
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

    const {
      comment,
    } = this.state
    
    onNext(comment)
  }

  render() {
    const {
      onNext,
    } = this.props

    const {
      comment,
    } = this.state

    return (
      <View style={styles.container}>
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
      </View>
    )
  }
}

Comment.defaultProps = {
}

Comment.propTypes = {
  onNext: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: '#000000',
    fontSize: 70,
  },
});

export default Comment