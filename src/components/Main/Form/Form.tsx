import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Snackbar from "../../Snackbar/Snackbar";
import formatDate from "../../../utils/formatDate";
import { ExpenseTrackerContext } from "../../../context/context";

import {
  incomeCategories,
  expenseCategories,
} from "../../../utils/constants/categories";

import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import useStyles from "./styles";

type FormData = {
  amount: number | string;
  category: string;
  type: string;
  date: string;
  description: string;
};

const initialState: FormData = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
  description: "",
};

const Form = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "type") {
      setFormData({
        ...formData,
        type: value,
        category: "",
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const isFormValid =
    formData.amount !== "" &&
    formData.category !== "" &&
    formData.type !== "" &&
    formData.date !== "" &&
    !Number.isNaN(Number(formData.amount));

  const createTransaction = () => {
    if (!isFormValid) return;

    setOpen(true);

    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    });

    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Snackbar open={open} setOpen={setOpen} />

      <Grid size={6}>
        <FormControl fullWidth required>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            label="Type"
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={6}>
        <FormControl fullWidth required>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            label="Category"
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={6}>
        <TextField
          type="number"
          label="Amount"
          required
          value={formData.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid size={6}>
        <TextField
          fullWidth
          label="Date"
          type="date"
          required
          value={formData.date}
          onChange={(e) => handleChange("date", formatDate(e.target.value))}
        />
      </Grid>

      <Grid size={12}>
        <TextField
          label="Description"
          placeholder="Enter description..."
          multiline
          minRows={3}
          maxRows={6}
          fullWidth
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Grid>

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ p: "0.75rem", mt: "1rem" }}
        onClick={createTransaction}
        disabled={!isFormValid}
        className={classes.button}
      >
        {formData.type === "Income" ? "Add Income" : "Make Expense"}
      </Button>
    </Grid>
  );
};

export default Form;
