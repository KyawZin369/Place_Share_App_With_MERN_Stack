import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if(!state.inputs[inputId]){
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValidate;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValidate;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValidate: action.isValidate,
          },
        },
        isValid: formIsValid,
      };
    case 'SET_DATA':
    return{
        inputs : action.inputs,
        isValid : action.dataIsValid
    }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValidate) => {
    dispatch({
      type: "CHANGE_INPUT",
      value: value,
      isValidate: isValidate,
      inputId: id,
    });
  }, []);


  const setFormData = useCallback((inputData , setIsValid)=>{
    dispatch({
        type : "SET_DATA",
        inputs : inputData,
        dataIsValid : setIsValid
    })
  },[])

  return [formState, inputHandler , setFormData];
};
