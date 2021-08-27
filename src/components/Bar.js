import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menu: {
    marginRight: theme.spacing(2),
  },
}));

export default function Bar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={index}>
            <Link to={`/${text}`}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" className={classes.menu} />
          </IconButton>
          <Link to="/">
            <Typography variant="h5">LOGO</Typography>
          </Link>
        </Toolbar>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer(false)}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          {list()}
        </SwipeableDrawer>
      </AppBar>
    </>
  );
}
