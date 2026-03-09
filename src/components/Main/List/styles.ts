import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

export default makeStyles((theme: Theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
  overflow: {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
