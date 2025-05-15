import { useState } from "react";

const Read = (props) => {

    const user = props.user;
    const setUser = props.setUser;
    
  const renderUser = user.map((user, index) => {
    return <li key={index}>name: {user.name}</li>;
  });
  return (
    <div>
      <h1>User Detail</h1>

      <ol>{renderUser}</ol>
    </div>
  );
};

export default Read;
