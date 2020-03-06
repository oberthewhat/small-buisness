import { connect } from 'react-redux'
import Listings from '../components/listings'
import { removePlace } from '../redux/actions'



const mapStateToProps = (state) => {
	return {
			place: state.place,
			user: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			removePlace: (index) => dispatch(removePlace(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)