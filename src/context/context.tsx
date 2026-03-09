import { createContext, useReducer, ReactNode } from "react";

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  type: string;
  date: string;
  description: string;
}

type Action =
  | { type: "DELETE_TRANSACTION"; payload: string }
  | { type: "ADD_TRANSACTION"; payload: Transaction };

const contextReducer = (
  state: Transaction[],
  action: Action,
): Transaction[] => {
  let transactions: Transaction[];

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

interface ContextType {
  transactions: Transaction[];
  deleteTransaction: (id: string) => void;
  addTransaction: (transaction: Transaction) => void;
  balance: number;
}

const initialState: Transaction[] =
  JSON.parse(localStorage.getItem("transactions") || "null") || [];

export const ExpenseTrackerContext = createContext<ContextType>({
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
  balance: 0,
});

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id: string) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce(
    (acc, curr) =>
      curr.type === "Expense" ? acc - curr.amount : acc + curr.amount,
    0,
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, deleteTransaction, addTransaction, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
