import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>Manipur: <small><em>districts and cities</em></small>
            {props.stateName}
          </Typography>
          <Button color="inherit">
            <a className="home" href="">
            Refresh
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

