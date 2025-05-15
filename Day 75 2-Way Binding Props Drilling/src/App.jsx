import { useState } from "react";

// Two Way Binding
// Two way binding is a technique in which the data in the model and the view are kept in sync.
const App = () => {
  const [user, setUser] = useState([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
    { name: "Smith", age: 28 },
  ]);

  const [fullname, setFullname] = useState("");
  const [fullage, setFullage] = useState(18);

  const renderUser = user.map((user, index) => {
    return <li key={index}>name: {user.name}</li>;
  });
  const handleSubmit = (event) => {
    event.preventDefault(); // page will not refresh //
    console.log("Submit");
    const newUser = {fullname, fullage};
    console.log(newUser);
  };

  // const changeHandler = (event) => {setFullname(event.target.value);}
  // console.log(fullname);
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
      <hr />

      <h1>User Detail</h1>

      <ol>{renderUser}</ol>
    </div>
  );
};

export default App;
