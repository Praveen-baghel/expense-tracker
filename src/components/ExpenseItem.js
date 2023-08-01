import { ExpenseDate } from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";
const ExpenseItem = (props) => {
  return (
    <>
      <div className={styles.main}>
        <ExpenseDate date={props.prod.date} />
        <h2>{props.prod.title}</h2>
        <button>${props.prod.amount}</button>
      </div>
    </>
  );
}; 
export default ExpenseItem;
