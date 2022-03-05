import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { db, auth, googleProvider } from "../utils/firebase-config";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

  return (
    <div className="container">
      <form id="addNewTransactionForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add new transaction</h2>

        <label>
          <span>Username</span>
          <input
            {...register("username")}
            type="text"
            placeholder="Enter a username"
          />
        </label>

        <br />
        <br />

        <label>
          <span>Name</span>
          <input {...register("name")} type="text" placeholder="Enter a name" />
        </label>

        <br />
        <br />

        <label>
          <span>DNI</span>
          <input {...register("dni")} type="text" placeholder="Enter a dni" />
        </label>

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
