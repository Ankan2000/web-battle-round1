import { Grid, Button, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Footer from "../components/Footer";

function createData(name, description) {
  return { name, description };
}

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
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData("Brand", "Hover Board XYZ"),
  createData("Frame Material", "Aluminium"),
  createData("Length", "65 Centimeters"),
  createData("Width", "25 Centimeters"),
  createData("Height", "7 Centimeters"),
  createData("Weight", "10 Kilograms"),
  createData(
    "Included in box",
    "Hoverboard (1 Unit), Charger (1 Unit), User Manual (1 Unit), Warranty Activation Card (1 Unit)"
  ),
];

const Features = () => {
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
          <Grid item>
            <Typography variant="h2" style={{ color: "#fff" }} gutterBottom>
              Features are Deceiving!
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
      <Grid container style={{ padding: "20px 25px" }}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Description
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum rem,
            maiores repellat enim error officiis veritatis molestias labore ab
            corporis reprehenderit, autem corrupti maxime accusamus quae
            recusandae quaerat ipsam harum optio nisi quisquam cumque quia
            reiciendis. Tenetur reiciendis consequatur ad! Sapiente corporis
            eaque iste consequuntur enim ratione dolorem, ad animi?
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Technical Specifications
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            style={{ width: "100%" }}
            elevation={0}
          >
            <Table className={classes.table} aria-label="features list">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Features;
