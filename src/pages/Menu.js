import React from 'react'
import {createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import auth from './../auth/auth-helper'
import { Link, useNavigate } from "react-router-dom"

const isActive = (history, path) => {
  if (history.location && history.location.path === path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const navigate = useNavigate();
        return <Component history={navigate} {...props}/>
    } 
    return Wrapper;
}

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Menu = withRouter(({history}) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline /* MUI Styles */ />
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          My MUI App
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")} size="large">
            <HomeIcon/>
          </IconButton>
        </Link>
        {
          !auth.isAuthenticated() && (<span>
            <Link to="/signup">
              <Button style={isActive(history, "/signup")}>Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(history, "/signin")}>Sign In
              </Button>
            </Link>
          </span>)
        }
        {
          auth.isAuthenticated() && (<span>
            <Link to="/axios">
              <Button style={isActive(history, "/axios")}>Axios Test</Button>
            </Link>
            <Link to={"/user/" + auth.isAuthenticated()._id}>
              <Button style={isActive(history, "/user/" + auth.isAuthenticated()._id)}>My Profile</Button>
            </Link>
            <Button color="inherit" onClick={() => {
                auth.signout(() => history('/'))
              }}>Sign out</Button>
          </span>)
        }
      </Toolbar>
    </AppBar>
  </ThemeProvider>
))

export default Menu
