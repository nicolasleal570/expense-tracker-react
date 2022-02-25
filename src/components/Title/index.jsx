import styles from "./Title.module.css";

function Title({ color, centered, fontSize }) {
  return (
    <h2
      className={styles.appTitle}
      style={{
        color: color,
        fontSize: fontSize,
        textAlign: centered ? "center" : "left",
      }}
    >
      Expense Tracker
    </h2>
  );
}

export default Title;
