import Layout from "../components/Layout";
import {
  Button,
  Dialog,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    zIndex: -10,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <div className={classes.overlay}></div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h2" style={{ color: "#fff" }} gutterBottom>
              We love playing. Don't You?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ color: "#fff" }}
              gutterBottom
            >
              Hover Board XYZ
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ marginTop: "20px" }}>
              <Link
                to="/contact"
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Contact US
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Layout>
      <Grid container spacing={2}>
        <Grid item style={{ padding: "20px 25px" }}>
          <Typography variant="h2" gutterBottom>
            A Brand that loves to play
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            adipisci consequatur fuga, nihil eligendi tempore labore voluptas
            temporibus excepturi distinctio perferendis, eos, aliquid illo
            aliquam voluptatem porro saepe. Maxime deleniti quasi tempore
            corrupti repellendus fugiat omnis at? Eius voluptate tenetur
            voluptas, sunt fugit earum. Deserunt odio neque modi voluptatem ex.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default About;
