import { connect } from 'react-redux'

import {
  getAll as getAllCheckIns,
  isPending as areCheckInsPending,
  
  fetch as fetchCheckIns,
} from '#modules/check-ins'

import Insight from '#components/insight'

const mapStateToProps = state => ({
  areCheckInsPending: areCheckInsPending(state),
  checkIns: getAllCheckIns(state),
})

const mapDispatchToProps = dispatch => ({
  getLatestCheckIns: () => dispatch(fetchCheckIns())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Insight)
