import React from "react";
import { ReactComponent as Logo } from "../pictures/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import profileIcon from "../pictures/icons/profileIcon.svg";
import "../css/Header.css";
import calendarIcon from "../pictures/icons/calendarIcon.svg";
import statisticIcon from "../pictures/icons/statisticIcon.svg";
import travelIcon from "../pictures/icons/travelIcon.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  backColor: {
    backgroundColor: "#B9BABA",
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
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backColor}>
        <Toolbar>
          <div className={classes.title} noWrap>
            <Link exact to="/home">
              <Logo />
            </Link>
            <nav className="navbar">
              <ul>
                <li>
                  <Link to="/travel">
                    <img
                      src={travelIcon}
                      alt="travel-link"
                      className="navbarIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/statistics">
                    <img
                      src={statisticIcon}
                      alt="statistic-link"
                      className="navbarIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/calendar">
                    <img
                      src={calendarIcon}
                      alt="calendar-link"
                      className="navbarIcon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <img
                      src={profileIcon}
                      alt="profile-link"
                      className="navbarIcon"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
