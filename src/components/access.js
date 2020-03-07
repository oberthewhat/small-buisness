import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    document.cookie = 'loggedIn=true;max-age = 60*1000'
    props.user(username)
    props.user(password)
    history.push("/Listings")
  }
  return (
    <div className="loginContainer">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Account Login
        </Typography>
          <form onSubmit={login}>
            <TextField
              required
              id="outlined-required"
              label="username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={classes.text}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={classes.text}
            />
            <Typography variant="h5" component="h2">
            </Typography>
            <Button
              type="submit"
              className={classes.logInButton}>LogIn</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


export default Access