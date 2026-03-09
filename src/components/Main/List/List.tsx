import { useContext } from "react";
import { Delete, MoneyOff } from "@mui/icons-material";
import { ExpenseTrackerContext } from "../../../context/context";
import {
  Slide,
  Avatar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemAvatar,
  List as MUIList,
} from "@mui/material";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <MUIList className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete sx={{ color: "error.main" }} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor:
                    transaction.type === "Income"
                      ? "success.main"
                      : "error.main",
                }}
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={transaction.category}
              secondary={
                <>
                  <span>{`$${transaction.amount} - ${transaction.date}`}</span>
                  <br />
                  <span className={classes.overflow}>
                    {`${transaction.description}`}
                  </span>
                </>
              }
            />
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
