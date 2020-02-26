import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		backgroundColor: '#61CE76'
  },
  title: {
		flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Austin Small Buisness App
          </Typography>
          <Link to="/Listings">Listings</Link>
          <Link to="/access">Login</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
