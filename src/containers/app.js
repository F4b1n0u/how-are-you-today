import { connect } from 'react-redux'

import {
  startLoad,
  endLoad,

  isLoaded,
  isLoading,
} from '#modules/app'

import {
  fetch as fetchFeelings,
} from '#modules/feelings'

import {
  fetch as fetchCheckins,
} from '#modules/check-ins'

import App from '#components/app'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  isLoaded: isLoaded(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: () => {
    dispatch(startLoad())
    dispatch(fetchCheckins())
    dispatch(fetchFeelings())
    dispatch(endLoad())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
