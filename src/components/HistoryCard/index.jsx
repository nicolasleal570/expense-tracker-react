import styles from "./HistoryCard.module.css";

function HistoryCard({ description, amount }) {
  return (
    <div className={styles.card}>
      <div className={styles.firstColumn}>
        <p>07</p>
      </div>
      <div className={styles.secondColumn}>
        <p className="description">{description}</p>
        <p className="amount">{amount}</p>
      </div>
    </div>
  );
}

export default HistoryCard;
