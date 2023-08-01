import React, { useState } from "react";
import styles from "./ExpenseFilter.module.css";

export const ExpenseFilter = (props) => {
  const handleYearChange = (e) => {
    props.handleYearChange(e.target.value);
  };
  return (
    <>
      <div className={styles.filterMain}>
        <h2>Filter by year</h2>
        <select onChange={handleYearChange}>
          <option key="all" value="all">
            All
          </option>
          {Array.from({ length: 2025 - 2019 }, (_, index) => (
            <option key={index} value={2019 + index}>
              {2019 + index}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
