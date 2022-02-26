import { useState, useEffect } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionForm from "../components/NewTransactionForm";
import HistoryList from "../components/HistoryList";
import Title from "../components/Title";
import YourBalance from "../components/YourBalance";
import { db } from "../utils/firebase-config";

export default function Homepage() {
  const [transactions, setTransactions] = useState([]);

  const addNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const fetchTransactions = () => {
    // Reference to "transactions" collection
    const transactionsRef = db.collection("transactions");

    // Fetch all transactions from the database
    transactionsRef
      .get()
      .then((data) => {
        const arr = [];

        data.docs.forEach((element) => {
          console.log({ data: element.data() });
          arr.push({ ...element.data() });
        });

        // Setting up transactions into the state
        setTransactions(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetch transactions when the component is mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <Title centered />

      <div className="container">
        <YourBalance balance={0} />

        <section className="total-info center-column">
          <BalanceCard />
          <BalanceCard isIncome={false} />
        </section>

        <TransactionForm addNewTransaction={addNewTransaction} />

        <HistoryList transactions={transactions} />
      </div>
    </div>
  );
}
