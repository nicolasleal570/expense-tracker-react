import HistoryCard from "../HistoryCard";
import styles from "./HistoryList.module.css";

function HistoryList({ transactions }) {
  return (
    <section className="center-column" id="historyListContainer">
      <div className={styles.historyRowTitle}>
        <h2 className={styles.title}>History</h2>
      </div>

      {transactions.map((transaction, idx) => {
        return (
          <HistoryCard
            key={idx}
            description={transaction.description}
            amount={transaction.amount}
          />
        );
      })}
    </section>
  );
}

export default HistoryList;
