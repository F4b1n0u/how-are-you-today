import { connect } from 'react-redux'
import { Font } from 'expo'
import { FONTS } from '#utils/assets'

import {
  startLoad,
  endLoad,

  isLoaded,
  isLoading,
} from '#modules/app'

import {
  fetch as fetchFeelings,
} from '#modules/feelings'

import App from '#components/app'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  isLoaded: isLoaded(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: async () => {
    await dispatch(startLoad())
    await Promise.all([
      Font.loadAsync({
        moods: FONTS.moods
      }),
    ])
    await dispatch(fetchFeelings())
    await dispatch(endLoad())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
