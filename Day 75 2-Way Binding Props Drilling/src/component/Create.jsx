import React from "react";
import { useState } from "react";

const Create = (props) => {
        console.log(props);

  const [fullname, setFullname] = useState("");
  const [fullage, setFullage] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault(); // page will not refresh //
    console.log("Submit");
    const newUser = { fullname, fullage };
    console.log(newUser);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setFullname(event.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(event) => setFullage(event.target.value)}
          value={fullage}
          type="number"
          placeholder="Age"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
