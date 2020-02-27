import React from "react";
import "../css/StickyFooter.css";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://juliaheller.github.io/myMeteo/">
        MyMeteo
      </Link>
      {" " + new Date().getFullYear() + "."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root + "footer-effect"}>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              <Link to="/legal">Legal notice and data privacy policy</Link>
              <br />
              <Link to="/animation">Animation</Link>
            </Typography>

            <Copyright />
          </Container>
        </footer>
      </div>
    </div>
  );
}
