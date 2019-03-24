
import React, { PureComponent } from 'react'
import { FlatList, Text, ActivityIndicator, View } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import CheckIn from '#components/insight/check-in'

class Insight extends PureComponent {
  componentWillMount() {
    const {
      getLatestCheckIns,
    } = this.props

    getLatestCheckIns()
  }

  render () {
    const {
      style,
      areCheckInsPending,
      checkIns,
    } = this.props
    
    const hasCheckIns = !isEmpty(checkIns)
  
    const checkInPlaceHolder = !hasCheckIns && (
      <React.Fragment>
        <Text>
          {'no check-ins yet !!!'}
        </Text>
      </React.Fragment>
    )
  
    const averageMood = checkIns.reduce(
      (acc, { mood }) => acc + mood,
      0
    ) / checkIns.length

    const averageMoodRatio = checkIns.reduce(
      (acc, { mood }) => acc + (mood >= averageMood) ? 1 : 0,
      0
    ) / checkIns.length

    const checkInAverage = hasCheckIns && (
      <View>
        <Text>
          {Math.trunc(averageMood)}
        </Text>
        <Text>
          {averageMoodRatio * 100}
        </Text>
      </View>
    )

    const checkInList = hasCheckIns && (
      <FlatList
        keyExtractor={({ timestamp }) => `${timestamp}`}
        data={checkIns}
        renderItem={({ item }) => (
          <CheckIn
            {...item}
          />
        )}
      />
    )

    const checkInLoading = (
      <ActivityIndicator
         size="large"
         color="#19A5B0"
      />
    )
  
    return (
      <Container style={style}>
        {
          areCheckInsPending
            ? checkInLoading
            : (
              <React.Fragment>
                {checkInPlaceHolder}
                {checkInAverage}
                {checkInList}
              </React.Fragment>
            )
        }
      </Container>
    )
  }
}

Insight.defaultProps = {
  areCheckInsPending: false,
}

Insight.propTypes = {
  getLatestCheckIns: PropTypes.func.isRequired,
  areCheckInsPending: PropTypes.bool,
  checkIns: PropTypes.array.isRequired
}

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default Insight
