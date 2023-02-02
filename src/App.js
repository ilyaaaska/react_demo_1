import React, { useState } from "react";
import Card from "./Card.js";
import UserForm from "./UserForm.js";
import UsersList from "./UsersList.js";
const INITIAL_USERS = [
  { id: 1, username: "txsmith", age: 31 },
  { id: 2, username: "bxsmith", age: 22 },
];
function App() {
  const [usersList, setUsersList] = useState(INITIAL_USERS);
  const addNewUserHandler = (newUser) => {
    setUsersList((prevList) => [...prevList, newUser]);
  };
  return (
    <div>
      <UserForm addNewUser={addNewUserHandler} />
      <UsersList list={usersList} />
    </div>
  );
}

export default App;
