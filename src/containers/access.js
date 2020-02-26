import { connect } from 'react-redux'
import Access from '../components/access'

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

export default connect(mapStateToProps)(Access)