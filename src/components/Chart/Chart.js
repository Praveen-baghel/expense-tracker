import React from "react";
import { ChartBar } from "./ChartBar";
import styles from "./Chart.module.css";
// import { styled } from "styled-components";
// const Div = styled.div`
//   height: 15rem;
//   background-color: rgb(232, 223, 223);
//   width: 90%;
//   margin: 0 auto;
//   border-radius: 10px;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;
export const Chart = (props) => {
  const points = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  for (let item of props.dataPoints) {
    let date = new Date(item.date);
    let index = date.getMonth();
    points[index].value = points[index].value + +item.amount;
  }

  const amounts = points.map((item) => {
    return +item.value;
  });
  const maxValue = Math.max(...amounts);
  return (
    // <Div className="mainChart">
    //   {points.map((dataPoint) => {
    //     return (
    //       <ChartBar
    //         key={dataPoint.label}
    //         value={dataPoint.value}
    //         label={dataPoint.label}
    //         maxValue={maxValue}
    //         id={dataPoint.label}
    //       />
    //     );
    //   })}
    // </Div>
    <div className={styles.mainChart}>
      {points.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={maxValue}
            id={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
