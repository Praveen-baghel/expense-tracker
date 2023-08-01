import logo from "./logo.svg";

import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
import { ExpenseForm } from "./components/ExpenseForm";
import { useEffect, useState } from "react";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { Chart } from "./components/Chart/Chart";

const getExpenses = () => {
  const lists = JSON.parse(localStorage.getItem("expenses"));
  if (lists) {
    return lists;
  }
  return [];
};

function App() {
  const [expenses, setExpenses] = useState(getExpenses());
  const [year, setYear] = useState("all");
  // const [filteredItems, setFilteredItems] = useState(getExpenses);
  const func1 = (expenseData) => {
    const data = { ...expenseData, id: Math.random().toString() };
    setExpenses((prevState) => {
      if (prevState) {
        return [...prevState, data];
      } else {
        return [data];
      }
    });
  };
  const handleYearChange = (year) => {
    setYear(year);
  };
  let filteredItems = [];
  if (year === "all") {
    filteredItems = expenses;
  } else {
    filteredItems = expenses.filter((item) => {
      const date = new Date(item.date);
      return date.getFullYear() === parseInt(year);
    });
  }

  let filteredExpenses = (
    <h2 style={{ textAlign: "center" }}>No Expenses Found!</h2>
  );
  if (filteredItems.length > 0) {
    filteredExpenses = filteredItems.map((prod) => {
      return <ExpenseItem key={prod.id} prod={prod} />;
    });
  }
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <>
      <ExpenseForm onApp={func1} />
      <Card>
        <ExpenseFilter handleYearChange={handleYearChange} />
        <Chart dataPoints={filteredItems} />
        {filteredExpenses}
      </Card>
    </>
  );
}

export default App;
