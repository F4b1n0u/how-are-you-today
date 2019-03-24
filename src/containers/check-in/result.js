import { connect } from 'react-redux'

import {
  save as saveCheckIn,

  isSaving as isSavingCheckIn,
  getError as getSavingCheckInError,
} from '#modules/check-ins'

import Result from '#components/check-in/result'

const mapStateToProps = state => ({
  isSavingCheckIn: isSavingCheckIn(state),
  savingCheckInError: getSavingCheckInError(state),
})

const mapDispatchToProps = dispatch => ({
  saveCheckIn: checkIn => {
    dispatch(saveCheckIn(checkIn))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)
