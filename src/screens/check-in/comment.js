
import React from 'react'

import Comment from '#components/check-in/comment'

const CommentScreen = ({ navigation }) => (
  <Comment
    onNext={() => navigation.navigate('result')}
  />
)

CommentScreen.navigationOptions = {
  title: 'Comment',
}

export default CommentScreen