import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
		minWidth: 275,
		maxWidth: "75%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
	},
	logInButton: {
		backgroundColor: 'lightgray',
		marginTop: 6,

	},
	text: {
		margin: 3,
	}
});




const Access = (props) => {
	const classes = useStyles();

	return(
		<div className="loginContainer">
<Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Account Login
        </Typography>
				<TextField
          required
          id="outlined-required"
          label="Required"
					variant="outlined"
					className={classes.text}
        />
				<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
					variant="outlined"
					className={classes.text}
        />
        <Typography variant="h5" component="h2">
        </Typography>
				<Button className={classes.logInButton}>LogIn</Button>
      </CardContent>
    </Card>
		</div>
	)
}


export default Access