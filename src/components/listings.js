import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/button';
import AddListing from '../containers/addListing'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	butt: {
		backgroundColor: '#61CE76',
		padding: 20,
		color: 'white',
		borderRadius: '5px'
	}
});

const Listings = (props) => {
	const classes = useStyles();
	return (
		<div className="tableCont">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">
								Description</TableCell>
							<TableCell align="right">Hours</TableCell>
							<TableCell align="right">Address</TableCell>
							{props.user.username &&
								<TableCell align="right">Remove</TableCell>}
						</TableRow>
					</TableHead>
					<TableBody>
						{props.place.map((row, idx) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									<Link to={`/place/${row.id}`}>
										{row.name}
									</Link>
								</TableCell>
								<TableCell align="right">{row.description}</TableCell>
								<TableCell align="right">{row.hours}</TableCell>
								<TableCell align="right">{row.address}</TableCell>
								{props.user.username && <TableCell align="right">
									<Button>
										<DeleteIcon onClick={() => props.removePlace(idx)}
											className="icon text-red" />
									</Button>
								</TableCell>}
							</TableRow>
						))}
					</TableBody>
				</Table>

			</TableContainer>
			<div className="addButton">
				{props.user.username && <AddListing />}
			</div>
		</div>
	)
}

export default Listings