
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import moment from 'moment'

const CheckIn = ({
  style,
  timestamp,
  mood,
  feelings,
  comment,
}) => {
  return (
    <StyledCheckIn style={style}>
      <Head>
        <Day>
            {moment(timestamp).format('D')}
            {'\n'}
            {moment(timestamp).format('MMMM')}
        </Day>

        <Time>
          {moment(timestamp).format('HH:mm')}
        </Time>

        <Mood>
          {mood}
        </Mood>
      </Head>
      <Body>
        <FeelingList>
          {feelings.map( feeling => (
            <Feeling
              key={feeling}
            >
              {feeling}
            </Feeling>
          ))}
        </FeelingList>

        <Comment>
          {comment}
        </Comment>
      </Body>
    </StyledCheckIn>
  )
}

CheckIn.defaultProps = {
  comment: null,
}

CheckIn.propTypes = {
  timestamp: PropTypes.number.isRequired,
  mood: PropTypes.number.isRequired,
  feelings: PropTypes.arrayOf(PropTypes.string).isRequired,
  comment: PropTypes.string,
}

const StyledCheckIn = styled.View`
  width: 100%;
  background-color: ${({ theme: { box } }) => box};
  padding-horizontal: 10;
  padding-vertical: 10;
`

const Head = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Day = styled.Text`
  flex-direction: column;
  text-align: center;
`

const Time = styled.Text`
`

const Mood = styled.Text`
  font-family: moods;
  font-size: 20;
  color: ${({ theme: { highlight } }) => highlight};
`

const FeelingList = styled.View`
  width: 100%;
  flex-direction: row;
`

const Body = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Feeling = styled.Text`
  border-radius: 10;
  padding-horizontal: 5;
  padding-vertical: 5;
  margin-horizontal: 5;
  margin-vertical: 5;
  background-color: ${({ theme: { background } }) => background};
`


const Comment = styled.Text`
`


export default CheckIn