import React from "react";

export const ExpenseDate = (props) => {
  const date = new Date(props.date);
  const day = date.toLocaleString("en-US", { day: "2-digit" }) + " ";
  const month = date.toLocaleString("en-US", { month: "long" }) + " ";
  const year = date.getFullYear();
  const formattedDate = month + day + year.toString();
  return <h3>{formattedDate}</h3>;
};
