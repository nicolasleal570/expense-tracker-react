import styles from "./YourBalance.module.css";

function YourBalance({ balance }) {
  return (
    <section className={`${styles.balanceContainer} center-column`}>
      <p className={styles.balanceTitle}>Your balance</p>
      <p className={styles.balanceAmount} id="totalBalance">
        ${Number.parseFloat(balance).toFixed(2)}
      </p>
    </section>
  );
}
export default YourBalance;
