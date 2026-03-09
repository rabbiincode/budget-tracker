import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

export default makeStyles((theme: Theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  positive: {
    color: green[500],
  },
  negative: {
    color: red[500],
  },
}));
