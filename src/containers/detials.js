import { connect } from 'react-redux'
import Details from '../components/details'

const mapStateToProps = (state) => {
	return {
			place: state.place,
			deets: state.deets,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 			removePlace: (index) => dispatch(removePlace(index))
// 	}
// }

export default connect(mapStateToProps)(Details)
