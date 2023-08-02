import React, { useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";
import { ErrorModal } from "./Modal/ErrorModal";
export const ExpenseForm = (props) => {
  //   const [data, setData] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const inputRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const [error, setError] = useState();
  // const titleHandler = (event) => {
  //   setTitle(event.target.value);
  //   // setData((prevState) => {
  //   //   return { ...prevState, title: event.target.value };
  //   // });
  // };
  // const amountHandler = (event) => {
  //   setAmount(event.target.value);
  //   // setData((prevState) => {
  //   //   return { ...prevState, amount: event.target.value };
  //   // });
  // };
  // const dateHandler = (event) => {
  //   setDate(event.target.value);
  //   // setData((prevState) => {
  //   //   return { ...prevState, date: event.target.value };
  //   // });
  // };
  const formHandler = (event) => {
    event.preventDefault();
    if (
      inputRef.current.value.trim().length == 0 ||
      amountRef.current.value.trim().length == 0 ||
      dateRef.current.value.length == 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid title, amount and date",
      });
      return;
    }
    if (amountRef.current.value < 0) {
      setError({
        title: "Invalid Amount",
        message: "Please enter valid amount(>0)",
      });
      return;
    }
    const expenses = {
      title: inputRef.current.value,
      amount: amountRef.current.value,
      date: new Date(dateRef.current.value),
    };
    props.onApp(expenses);
    inputRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  };
  const deleteError = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal obj={error} deleteError={deleteError} />}
      <div className={styles.form}>
        <form onSubmit={formHandler}>
          <div className={styles.title}>
            <label>Title:</label>
            <br></br>
            <input type="text" ref={inputRef}></input>
          </div>

          <div className={styles.amount}>
            <label>Amount:</label>
            <br></br>
            <input type="number" ref={amountRef}></input>
          </div>

          <div className={styles.date}>
            <label>Date:</label>
            <br></br>
            <input
              type="date"
              max="2025-12-31"
              min="2020-01-01"
              ref={dateRef}
            ></input>
          </div>
          <button type="submit" className={styles.btn}>
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};
