import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import {
  Card,
  Grid,
  Divider,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card>
      <CardHeader
        title="Expense Tracker"
        subheader="Track your expenses seamlessly"
      />
      <CardContent>
        <Typography align="center" variant="h5">
          <b>Total Balance</b> <br />
          <Typography
            variant="h5"
            className={balance < 0 ? classes.negative : classes.positive}
          >
            ${balance}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ lineHeight: "1.5rem", mt: "5rem" }}
        >
          <InfoCard />
        </Typography>
        <Divider sx={{ m: "2rem" }} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid size={12} component="div">
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
