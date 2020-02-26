import { connect } from 'react-redux'
import Listings from '../components/listings'


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

export default connect(mapStateToProps)(Listings)