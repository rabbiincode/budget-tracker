import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import useStyles from "./styles";

interface DetailsProps {
  title: "Income" | "Expense";
}

const Details: React.FC<DetailsProps> = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader
        title={title}
        sx={{
          color: title === "Income" ? "green" : "red",
        }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          ${total}
        </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
