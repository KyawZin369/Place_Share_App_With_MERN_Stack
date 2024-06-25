import React from "react";
import ReactDOM from "react-dom";
import DropBack from "./DropBack";
import { CSSTransition } from "react-transition-group";
import './modal.css'

const ModalOverLay = (props) => {
  
  const content = (
    <div className={`modal__${props.modal}`}>
      <div className={`head___${props.headclass}`}>
        <header className={`header___${props.headerclass}`}>{props.header}</header>
      </div>
      <form
        onSubmit={
          props.onsubmit ? props.onsubmit : (event) => event.preventDefault()
        }
      >
        <div className={`body___${props.bodyclass}`}>{props.children}</div>
        <footer className={`footer___${props.footerclass}`}>{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("dropBack"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <DropBack onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverLay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
