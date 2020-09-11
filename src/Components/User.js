import React from "react";

function User(props) {
  return <h1>Hello User {props.match}</h1>;
}

// function User({ match }) {
//   return <h1>Hello User {match.params.username}</h1>;
// }

export default User;
