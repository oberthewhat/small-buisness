import { connect } from 'react-redux'
import Details from '../components/details'

const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 			removePlace: (index) => dispatch(removePlace(index))
// 	}
// }

export default connect(mapStateToProps)(Details)
