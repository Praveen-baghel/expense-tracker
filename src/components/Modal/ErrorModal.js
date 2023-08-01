import React from "react";
import styles from "./ErrorModal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.deleteError} className={styles.backDrop} />;
};
const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <h2>{props.title}</h2>
      <h3>{props.message}</h3>
      <button onClick={props.deleteError}>Okay</button>
    </div>
  );
};

export const ErrorModal = (props) => {
  return (
    <div>
      {createPortal(
        <Backdrop deleteError={props.deleteError} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <Overlay
          title={props.obj.title}
          message={props.obj.message}
          deleteError={props.deleteError}
        />,
        document.getElementById("overlay")
      )}
    </div>
  );
};
