import Main from "../Main/Main";
import { Grid } from "@mui/material";
import Details from "../Details/Details";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      className={classes.grid}
      style={{ height: "100vh" }}
    >
      <Grid spacing={12} size={{ md: 12, lg: 4 }}>
        <Details title="Income" />
      </Grid>

      <Grid spacing={12} size={{ md: 12, lg: 3 }}>
        <Main />
      </Grid>

      <Grid spacing={12} size={{ md: 12, lg: 4 }}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

export default Home;
