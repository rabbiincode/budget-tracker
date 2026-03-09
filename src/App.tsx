import Grid from "@mui/material/Grid";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import useStyles from "./styles";

function App() {
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
      <Grid spacing={12} size={{ sm: 4 }} className={classes.mobile}>
        <Details title="Income" />
      </Grid>

      <Grid spacing={12} size={{ sm: 3 }} className={classes.main}>
        <Main />
      </Grid>

      <Grid spacing={12} size={{ sm: 4 }} className={classes.last}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
}

export default App;
