import { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredAge);
    props.onAddUser(enteredName, enteredAge);
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div>
        <label>Name: </label>
        <input type="text" onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" onChange={ageChangeHandler} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
