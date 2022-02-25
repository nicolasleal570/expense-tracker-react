import styles from "./BalanceCard.module.css";

function BalanceCard({ isIncome = true }) {
  const backgroundClass = isIncome ? styles.incomeColor : styles.expenseColor;
  const text = isIncome ? "Income" : "Expense";

  return (
    <div className={`${styles.amountContainer} ${backgroundClass}`}>
      <p className="label">{text}</p>
      <p className="amount">$0.00</p>
    </div>
  );
}

export default BalanceCard;
