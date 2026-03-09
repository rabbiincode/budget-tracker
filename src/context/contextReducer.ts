export interface Transaction {
  id: string;
  type: string;
  category: string;
  amount: number;
  description: string;
}

type Action =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string };

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

export default contextReducer;
