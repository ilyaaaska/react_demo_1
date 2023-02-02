import React, { useState } from "react";
import Card from "./Card.js";
const UsersList = (props) => {
  return (
    <Card className="goal-form">
      <ul>
        {props.list.map((user) => (
          <li id={user.id}>{`${user.username} (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
