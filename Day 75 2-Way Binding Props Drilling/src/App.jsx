import { useState } from "react";
import Create from "./component/Create";
import Read from "./component/Read";

// Two Way Binding
// Two way binding is a technique in which the data in the model and the view are kept in sync.
const App = () => {
  const [user, setUser] = useState([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
    { name: "Smith", age: 28 },
  ]);

  // const changeHandler = (event) => {setFullname(event.target.value);}
  // console.log(fullname);
  return (
    <div>
      <Create />
      <hr />
      <Read user={user} setUser={setUser} />
    </div>
  );
};

export default App;
