import React from "react";
import Logo from "../pictures/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Header.css";
import { Link } from "react-router-dom";
import Colors from "../utils/Colors";
import statisticIcon from "../pictures/icons/statisticIcon.svg";
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

export default function Header({ clickStats }) {
  const classes = useStyles();
  return (


    <AppBar position="static" className={classes.backColor}>
      <div className={classes.root + "header-effect"}>
        <div className='button-statitics' >
          <span>
            <svg onClick={() => clickStats()} width='40px' height='40px'>
              <image className='navbarIcon' xlinkHref={statisticIcon} ></image>
            </svg>
          </span>
        </div>
      </div>
      <Toolbar variant="dense">
        <div className={classes.title}>
          <Link exact="true" to="/home">
            <img src={Logo} alt="logo" className="header-logo" />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
