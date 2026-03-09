import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
