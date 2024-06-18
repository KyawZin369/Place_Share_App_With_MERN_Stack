import React from "react";
import ReactDOM from "react-dom";

const DropBack = (props) => {
  return ReactDOM.createPortal(
    <div className={props.className} onClick={props.onClick}>{props.children}</div>,
    document.getElementById("dropBack")
  );
};

export default DropBack;
