import { useForm } from "react-hook-form";

import styles from "./NewTransactionForm.module.css";

function TransactionForm({ addNewTransaction }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    addNewTransaction({ description: data.description, amount: data.amount });
  };

  return (
    <form
      className={`${styles.addTransaction} center-column`}
      id="addNewTransactionForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={styles.title}>Add new transaction</h2>

      <label className={styles.inputLabel} htmlFor="descriptiveText">
        <span className={styles.labelText}>Descriptive Text</span>
        <input
          {...register("description", {
            required: { value: true, message: "Este campo es requerido" },
          })}
          type="text"
          className={styles.formInput}
          id="descriptiveText"
          placeholder="Enter a descriptive text..."
        />
        {errors.description && (
          <span
            className={styles.labelText}
            style={{ color: "red", marginTop: "10px" }}
          >
            Error: {errors.description.message}
          </span>
        )}
      </label>

      <label className={styles.inputLabel} htmlFor="amountText">
        <span className={styles.labelText}>
          Amount (negative - expense | positive - income)
        </span>
        <input
          {...register("amount", { required: true })}
          type="number"
          step="0.01"
          className={styles.formInput}
          id="amountText"
          placeholder="Enter the amount..."
        />
      </label>

      <button type="submit" className={styles.sendBtn} id="btnAddTransaction">
        Add transaction
      </button>
    </form>
  );
}

export default TransactionForm;
