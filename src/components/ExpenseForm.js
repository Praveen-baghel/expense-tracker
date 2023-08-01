import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";
import { ErrorModal } from "./Modal/ErrorModal";
export const ExpenseForm = (props) => {
  //   const [data, setData] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState();
  const titleHandler = (event) => {
    setTitle(event.target.value);
    // setData((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
    // setData((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
    // setData((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (
      title.trim().length == 0 ||
      amount.trim().length == 0 ||
      date.trim().length == 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid title, amount and date",
      });
      return;
    }
    if (amount < 0) {
      setError({
        title: "Invalid Amount",
        message: "Please enter valid amount(>0)",
      });
      return;
    }
    const expenses = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onApp(expenses);
    setTitle("");
    setAmount("");
    setDate("");
  };
  const deleteError=()=>{
    setError(null);
  }
  return (
    <>
      {error && <ErrorModal obj={error} deleteError={deleteError} />}
      <div className={styles.form}>
        <form onSubmit={formHandler}>
          <div className={styles.title}>
            <label>Title:</label>
            <br></br>
            <input type="text" value={title} onChange={titleHandler}></input>
          </div>

          <div className={styles.amount}>
            <label>Amount:</label>
            <br></br>
            <input
              type="number"
              value={amount}
              onChange={amountHandler}
            ></input>
          </div>

          <div className={styles.date}>
            <label>Date:</label>
            <br></br>
            <input type="date" value={date} onChange={dateHandler}></input>
          </div>
          <button type="submit" className={styles.btn}>
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};
