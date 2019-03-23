
import React from 'react'

import Comment from '#components/check-in/comment'

const CommentScreen = ({ navigation }) => (
  <Comment
    onNext={params => navigation.navigate('result', params)}
  />
)

CommentScreen.navigationOptions = {
  title: 'Comment',
}

export default CommentScreen