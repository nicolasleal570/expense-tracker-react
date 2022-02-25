import { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionForm from "../components/NewTransactionForm";
import HistoryList from "../components/HistoryList";
import Title from "../components/Title";
import YourBalance from "../components/YourBalance";
import { db } from "../utils/firebase-config";
import { useEffect } from "react/cjs/react.development";

export default function Homepage() {
  const [transactions, setTransactions] = useState([]);

  const addNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const fetchTransactions = () => {
    const transactionsRef = db.collection("transactions");
    transactionsRef
      .get()
      .then((data) => {
        const arr = [];

        data.docs.forEach((element) => {
          console.log({ data: element.data() });
          arr.push({ ...element.data() });
        });

        setTransactions(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("PRIMER CONSOLE LOG");

    fetchTransactions();

    console.log("TERCER CONSOLE LOG");
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
