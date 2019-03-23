import { connect } from 'react-redux'

import {
  getAll as getAllFeelings,
} from '#modules/feelings'

import FeelingSelection from '#components/check-in/feeling-selection'

const mapStateToProps = state => ({
  feelings: getAllFeelings(state),
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeelingSelection)
