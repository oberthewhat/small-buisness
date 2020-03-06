import { connect } from 'react-redux'
import Nav from '../components/nav'

const mapStateToProps = (state) => {
	return {
			username: state.username,
			password: state.password,
			loggedIn: false,
			}
}
export default connect(mapStateToProps)(Nav)
