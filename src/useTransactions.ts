import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
  resetCategories,
  incomeCategories,
  expenseCategories,
} from "./utils/constants/categories";

interface ChartData {
  datasets: { data: number[]; backgroundColor: string[] }[];
  labels: string[];
}

const useTransactions = (title: "Income" | "Expense") => {
  resetCategories();

  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);

  const total = rightTransactions.reduce(
    (acc, currVal) => acc + currVal.amount,
    0,
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartCategories =
    filteredCategories.length > 0
      ? filteredCategories
      : categories.map((c) => ({
          ...c,
          amount: 1,
          color: "#e0e0e0",
        }));

  const chartData: ChartData = {
    datasets: [
      {
        data: chartCategories.map((c) => c.amount),
        backgroundColor: chartCategories.map((c) => c.color),
      },
    ],
    labels: chartCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
