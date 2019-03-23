import { connect } from 'react-redux'

import {
  startLoad,
  endLoad,
} from '#modules/app'

import {
  isLoaded,
  isLoading,
} from '#selectors/app'

import App from '#components/app'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  isLoaded: isLoaded(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: () => {
    dispatch(startLoad())
    setTimeout(() => {
      dispatch(endLoad())
    }, 1000)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
