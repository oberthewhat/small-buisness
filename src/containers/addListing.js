import { connect } from 'react-redux'
import AddListing from '../components/addListing'
import { updatePlace } from "../redux/actions"

const mapDispatchToProps = (dispatch) => {
	return {
			updatePlace: (place) => dispatch(updatePlace(place))
	}
}

export default connect(null, mapDispatchToProps)(AddListing)