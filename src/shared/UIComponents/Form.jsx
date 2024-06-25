import React, { useEffect, useReducer } from "react";
import { Validate } from "../../shared/utils/Validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValidate: Validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Form = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialvalue || "",
    isValidate: props.initialvalid || false,
    isTouched: false,
  });

  const { onInput, id } = props;
  const { value, isValidate } = inputState;

  useEffect(() => {
    onInput(id, value, isValidate);
  }, [onInput, id, value, isValidate]);

  const validatorHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators || [],
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={
          !inputState.isValidate && inputState.isTouched
            ? props.errorMessageHandler
            : props.inputClass
        }
        value={inputState.value}
        onChange={validatorHandler}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        className={
          !inputState.isValidate && inputState.isTouched
            ? props.errorMessageHandler
            : props.inputClass
        }
        rows={props.rows || 3}
        value={inputState.value}
        onChange={validatorHandler}
        onBlur={touchHandler}
      />
    );

  return (
    <div className={props.className}>
      <label htmlFor={props.for} className={props.labelClass}>
        {props.label}
      </label>
      {element}
      <span className={props.className}>{props.otherFeature}</span>
      {!inputState.isValidate && inputState.isTouched && (
        <p className={props.errorClass}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Form;
