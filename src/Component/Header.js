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
    backgroundColor: "#B9BABA"
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
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
