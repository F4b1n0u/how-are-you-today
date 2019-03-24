import React from 'react'
import styled from 'styled-components/native'

import Comment from '#components/check-in/comment'

const CommentScreen = ({ navigation }) => (
  <Comment
    previousFormState={navigation.getParam('formState')}
    onNext={formState => navigation.navigate('result', { formState })}
  />
)

CommentScreen.navigationOptions = {
  title: 'Comment',
}

export default CommentScreen