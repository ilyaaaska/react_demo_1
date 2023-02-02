import React, { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
const UserForm = (props) => {
  const [hasError, setHasError] = useState(false);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (userName.trim() === "" || age === 0) {
      setHasError(true);
      setUserName("");
      setAge(0);
      return;
    }
    props.addNewUser({
      username: userName,
      age: age,
      id: Math.random() * 100000,
    });
  };
  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };
  const closeErrorMessageHandler = () => {
    setHasError(false);
  };
  return (
    <Card>
      <form className="goal-form form-input" onSubmit={submitFormHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={userNameInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={age} onChange={ageInputHandler} />
        <button>Add User</button>
      </form>
      {hasError && <ErrorMessage closeBox={closeErrorMessageHandler} />}
    </Card>
  );
};

export default UserForm;
