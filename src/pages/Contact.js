import { Grid, TextareaAutosize } from "@material-ui/core";
import Layout from "../components/Layout";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  defaultMargin: {
    margin: theme.spacing(2),
  },
  topMargin: {
    margin: theme.spacing(2, 0),
  },
  textArea: {
    width: "100%",
    padding: "10px 12px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    paddingTop: "150px",
    background: "#000",
    zIndex: -10,
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    query: "",
  });

  const handleSubmit = (event) => event.preventDefault();

  const handleChange = (item) => (event) =>
    setValues({ ...values, [item]: event.target.value });

  return (
    <Layout>
      <div className={classes.overlay}>
        <Grid container>
          <Grid item container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                className={classes.defaultMargin}
                style={{ color: "#fff" }}
                align="center"
              >
                Contact Us
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className={classes.defaultMargin}
            >
              <FormControl>
                <InputLabel shrink htmlFor="email">
                  <Typography
                    variant="body1"
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                    }}
                    gutterBottom
                  >
                    E-mail:
                  </Typography>
                </InputLabel>
                <BootstrapInput
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </FormControl>
              <label htmlFor="query">
                <Typography
                  className={classes.topMargin}
                  variant="body1"
                  style={{ color: "#fff" }}
                >
                  Query:
                </Typography>
              </label>
              <TextareaAutosize
                id="query"
                className={classes.textArea}
                minRows={5}
                fullWidth
                value={values.query}
                onChange={handleChange("query")}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.topMargin}
              >
                Send
              </Button>
            </form>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Contact;
