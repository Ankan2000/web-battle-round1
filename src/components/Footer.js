import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    padding: "0.8rem 1.8rem",
    color: "#fff",
    background: "#000",
    marginTop: "20px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography variant="body1" align="center" className={classes.footer}>
      Made by Ankan Bag. Contains some copyright contents.
    </Typography>
  );
};

export default Footer;
