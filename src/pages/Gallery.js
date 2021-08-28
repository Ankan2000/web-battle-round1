import {
  Button,
  Dialog,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "90vw",
  },
  dialog: {
    maxWidth: "60%",
  },
  enlargedImage: {
    width: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    zIndex: -10,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const toggleDialog = (value, src) => () => {
    if (!value) setSrc("");
    else setSrc(src);
    setOpen(value);
  };

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
          <Grid item>
            <Typography variant="h2" style={{ color: "#fff" }} gutterBottom>
              Great product needs Great Photos
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
      <div className={classes.root}>
        <ImageList
          rowHeight={160}
          className={classes.imageList}
          gap={1}
          cols={3}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <ImageListItem
              cols={number % 2 === 0 && number !== 10 ? 1 : 2}
              rows={screenWidth > 600 ? 2 : 1}
              key={number}
            >
              <Button
                onClick={toggleDialog(
                  true,
                  process.env.PUBLIC_URL + `/image${number}.jpg`
                )}
              >
                <img
                  src={process.env.PUBLIC_URL + `/image${number}.jpg`}
                  alt="some image"
                />
              </Button>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Dialog open={open} onClose={toggleDialog(false)}>
        <img src={src} alt="some image" className={classes.enlargedImage} />
      </Dialog>
      <Footer />
    </>
  );
};

export default Gallery;
