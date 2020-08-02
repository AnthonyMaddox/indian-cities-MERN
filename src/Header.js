import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 
function Header(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
   palette: {
     primary: {
       light: '#757ce8',
       main: '#3f50b5',
       dark: '#002884',
       contrastText: '#fff',
     },
     secondary: {
       light: '#ff7961',
       main: '#ffc400',
       dark: '#ba000d',
       contrastText: '#000',
     },
   },
 });
  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            //onclick="openNav()"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Manipur: <small><em>districts and cities</em></small>
            {props.stateName}
          </Typography>
          <Button color="inherit">
            <a className="home" href="">
            Home
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
