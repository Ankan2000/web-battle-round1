import { CssBaseline, Grid } from "@material-ui/core";
import {
  makeStyles,
  Typography,
  Button,
  Link as MuiLink,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const useStyles = makeStyles((theme) => ({
  showcase: {
    position: "relative",
    top: 0,
    right: 0,
    width: "100%",
    minHeight: "100vh",
    padding: "150px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "0.5s",
    zIndex: 10,
  },
  activeShowcase: {
    position: "relative",
    top: 0,
    right: "40vw",
    width: "100%",
    minHeight: "100vh",
    padding: "150px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "0.5s",
    zIndex: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: theme.spacing(5, 6),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  logo: {
    width: "6rem",
    textTransform: "uppercase",
  },
  toggleMenu: {
    color: "#fff",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = (event) => setOpen(!open);
  return (
    <>
      <CssBaseline />
      <section className={open ? classes.activeShowcase : classes.showcase}>
        <header className={classes.header}>
          <Link to="/" className={classes.link}>
            <img
              src={process.env.PUBLIC_URL + "/hoverboard_1_.svg"}
              alt="logo"
              className={classes.logo}
            />
          </Link>
          <Button className={classes.toggleMenu} onClick={toggleOpen}>
            {open ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </Button>
        </header>
        {children}
      </section>
      <MenuList />
    </>
  );
};

export default Layout;
