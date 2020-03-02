import React from "react";
import Logo from "../pictures/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Header.css";
import { Link } from "react-router-dom";
import Colors from "../utils/Colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    witdh: "100%"
  },
  backColor: {
    backgroundColor: Colors.mainYellow,
    marginBottom: "5px"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  statisticButtonClicked: {}
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root + "header-effect"}>
      <AppBar position="static" className={classes.backColor}>
        <Toolbar variant="dense">
          <div className={classes.title}>
            <Link exact="true" to="/home">
              <img src={Logo} alt="logo" className="header-logo" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
