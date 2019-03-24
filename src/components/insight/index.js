
import React, { PureComponent } from 'react'
import { Text, ActivityIndicator, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import PieChart from 'react-native-pie-chart'

import CheckIn from '#components/insight/check-in'

const {
  height: windowHeight,
} = Dimensions.get('window')

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

    const averageMoodRatio = checkIns
      .filter(({ mood }) => mood >= averageMood).length / checkIns.length

    const checkInAverage = hasCheckIns && (
      <AverageWrapper>
        <ChartAndMood>
          <StyledPieChart
            series={[ averageMoodRatio, 1 - averageMoodRatio ]}
          />
          <Mood>
            {Math.trunc(averageMood)}
          </Mood>
        </ChartAndMood>
        <Stats>
          <Percent>
            {`${Math.trunc(averageMoodRatio * 100)}%`}
          </Percent>
          <Reference>
            {`based on ${checkIns.length} ${checkIns.length > 1 ? 'entries' : 'entry'}`}
          </Reference>
        </Stats>
      </AverageWrapper>
    )

    const checkInList = hasCheckIns && (
      <CheckIns
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
      <StyledActivityIndicator />
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { background } }) => background};
  padding-vertical: 10;
`

const StyledActivityIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#19A5B0',
})`
`

const AverageWrapper = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 20;
  background-color: ${({ theme: { box } }) => box};
`

const ChartAndMood = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-vertical: 10;
`

const StyledPieChart = styled(PieChart).attrs(({ theme: { box, highlight, background } }) => ({
  doughnut: true,
  chart_wh: windowHeight / 5,
  sliceColor: [highlight, background],
  coverFill: box,
}))`
`

const Mood = styled.Text`
  font-family: moods;
  font-size: ${windowHeight / 15};
  color: ${({ theme: { highlight } }) => highlight};
  flex: 1;
  position: absolute;
`

const Stats = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center
`
const Percent = styled.Text`
  font-size: 50;
  color: ${({ theme: { highlight } }) => highlight};
`

const Reference = styled.Text`
`

const CheckIns = styled.FlatList.attrs(() => ({
  ItemSeparatorComponent: styled.View`height: 10;`,
}))`
  flex: 1;
  width: 90%;
`

export default Insight
