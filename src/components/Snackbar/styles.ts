import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: 2,
    },
  },
}));
