import { useState } from "react";
import "./InputForm.css";
import "../assets/UI/Modal.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0) {
      errorHandler("Please enter a name!");
      return;
    }
    if (enteredAge.trim().length === 0) {
      errorHandler("Please enter an age!  ");
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName(""); // Reset the input fields
    setEnteredAge("");
  };
  const errorHandler = (error) => {
    setError(error);
    props.onError(error);
  };
  return (
    <>
      {/* {error !== null && <Modal error={error} setError={setError} />} */}
      <form className="form" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="username">Name: </label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="userage">Age:</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default InputForm;
