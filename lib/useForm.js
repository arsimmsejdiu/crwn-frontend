import { useState, useEffect } from "react";

export default function useForm(initial = {}) {
  // create a state for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // this function runs when the things we are watching change
    setInputs(initial);
  },[initialValues]);

  function handleChange(e) {
    let { name, value, type } = e.target; // get the name and value of the input
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    // get the event target
    setInputs({
      // spread the existing inputs
      ...inputs,
      [name]: value,
    });
  }

  function resetForms() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }
  // return an object with the state and a function to update it
  return {
    inputs,
    handleChange,
    resetForms,
    clearForm,
  };
}
