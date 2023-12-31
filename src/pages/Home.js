import React, {Component} from 'react'
import auth from './../auth/auth-helper'
import Welcome from './../components/Welcome'
import Dashboard from './../components/Dashboard'

/* const useStyles = theme => makeStyles({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
}) */

class Home extends Component {

  render() {
    if(!auth.isAuthenticated())
      return <Welcome/>
    else
      return <Dashboard/>
  }
}

export default Home
