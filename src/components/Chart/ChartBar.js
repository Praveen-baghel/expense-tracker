import React from "react";
import styles from "./ChartBar.module.css";

export const ChartBar = (props) => {
  let value = "0%";
  if (props.maxValue > 0) {
    value = (props.value / props.maxValue) * 100 + "%";
  }
  return (
    <>
      <div className={styles.barMain}>
        <div className={styles["chart_outer"]}>
          <div className={styles.chartBar} style={{ height: value }}></div>
        </div>
        <p className={styles.label}>{props.label}</p>
      </div>
    </>
  );
};
