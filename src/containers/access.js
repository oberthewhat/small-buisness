import { connect } from 'react-redux'
import Access from '../components/access'
import { user } from "../redux/actions"

const mapStateToProps = (state) => {
	return {
			username: state.username,
			password: state.password,
			loggedIn: state.loggedIn,
			}
}

const mapDispatchToProps = (dispatch) => {
	return {
			user: (username) => dispatch(user(username))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Access)