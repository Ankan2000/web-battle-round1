import { CssBaseline, Grid } from "@material-ui/core";
import Layout from "../components/Layout";
import {
  makeStyles,
  Typography,
  Button,
  Link as MuiLink,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.05,
    zIndex: -100,
  },
  videoShowcase: {
    width: "100vw",
    height: "100%",
    minHeight: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    background: "rgba(0, 0, 0, 0.8)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    mixBlendMode: "overlay",
    zIndex: -10,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    background: "rgba(0, 0, 0, 0.8)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: 0,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div style={{ background: "rgba(0, 0, 0, 0.8)" }}>
      <Layout>
        <video
          className={classes.videoBackground}
          src="/background.mp4"
          muted
          loop
          autoPlay
        />
        <div className={classes.overlay}></div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h2" style={{ color: "#fff" }} gutterBottom>
              Greatest Invention of all time and kid's all time favorite
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
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src="/image1.jpg" alt="hoverboard" className={classes.image} />
        </Grid>
        <Grid item sm={6}>
          <div className={classes.textContainer}>
            <img src="/icon1.svg" alt="icon 1" style={{ width: "100px" }} />
            <Typography variant="h3" align="center" gutterBottom>
              Eco-Friendly
            </Typography>
            <Typography variant="body1" align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              impedit consequuntur architecto! Inventore id suscipit illo nam ea
              fugit distinctio!
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container direction={screenWidth > 600 ? "row" : "column-reverse"}>
        <Grid item xs={12} sm={6}>
          <div className={classes.textContainer}>
            <img src="/icon2.svg" alt="icon 2" style={{ width: "100px" }} />
            <Typography variant="h3" align="center" gutterBottom>
              Music On The Go
            </Typography>
            <Typography variant="body1" align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              impedit consequuntur architecto! Inventore id suscipit illo nam ea
              fugit distinctio!
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/image3.jpg" alt="hoverboard" className={classes.image} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src="/image9.jpg" alt="hoverboard" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.textContainer}>
            <img src="/icon3.svg" alt="icon 3" style={{ width: "100px" }} />
            <Typography variant="h3" align="center" gutterBottom>
              Always Connected
            </Typography>
            <Typography variant="body1" align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              impedit consequuntur architecto! Inventore id suscipit illo nam ea
              fugit distinctio!
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <main className={classes.videoShowcase}>
          <Typography style={{ marginTop: "40px" }} variant="h3" gutterBottom>
            Here's a demo.
          </Typography>
          <div style={{ width: screenWidth > 600 ? "50vw" : "100vw" }}>
            <Player src="https://web-battle.s3.amazonaws.com/round1/Dash/dash.mpd" />
          </div>
        </main>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ color: "#fff", margin: "20px" }}
            gutterBottom
          >
            FAQs:
          </Typography>
        </Grid>
        <Grid item>
          <Accordion style={{ margin: "5px 20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Where To Buy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion style={{ margin: "5px 20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Who can ride?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion style={{ margin: "5px 20px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>When will it be available?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Home;
