import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "40vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#fff",
  },
  link: {
    textDecoration: "none",
  },
}));

const MenuList = () => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.menu}>
        <Link to="/" className={classes.link}>
          <ListItem button component="li">
            <ListItemText primary="Home" style={{ color: "#000" }} />
          </ListItem>
        </Link>
        <Link to="/gallery" className={classes.link}>
          <ListItem button component="li">
            <ListItemText primary="Gallery" style={{ color: "#000" }} />
          </ListItem>
        </Link>
        <Link to="/features" className={classes.link}>
          <ListItem button component="li">
            <ListItemText primary="Features" style={{ color: "#000" }} />
          </ListItem>
        </Link>
        <Link to="/about" className={classes.link}>
          <ListItem button component="li">
            <ListItemText primary="About" style={{ color: "#000" }} />
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.link}>
          <ListItem button component="li">
            <ListItemText
              primary="Contact Us"
              style={{ color: "#000" }}
            ></ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default MenuList;
