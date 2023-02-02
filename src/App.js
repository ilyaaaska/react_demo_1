import React, { useState } from "react";

const INITIAL_USERS = [
  { id: 1, username: "txsmith", age: 31 },
  { id: 2, username: "bxsmith", age: 22 },
];
function App() {
  const [usersList, setUsersList] = useState(INITIAL_USERS);
  const addNewUserHandler = (newUser) => {
    setUsersList((prevList) => [...prevList, newUser]);
  };
  return <div></div>;
}

export default App;
