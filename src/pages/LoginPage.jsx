import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db, auth, googleProvider } from "../utils/firebase-config";

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    await auth.signInWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

  return (
    <div className="container">
      <form id="addNewTransactionForm" onSubmit={handleSubmit(onSubmit)}>
        <br />
        <br />

        <label>
          <span>Email</span>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter a email"
          />
        </label>

        <br />
        <br />

        <label>
          <span>Password</span>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter a password"
          />
        </label>

        <br />
        <br />

        <button type="button" onClick={handleLoginWithGoogle}>
          Login with google
        </button>
        <br />
        <br />

        <button type="submit" id="btnAddTransaction">
          Create account
        </button>
      </form>
    </div>
  );
}
