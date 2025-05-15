// const App = () => {
//   let s = "Hello World";
//   let n = 1;
//   let b = true;
//   let nu = null;
//   let un = undefined;
//   let a = [<h1>hello</h1>,"apple",1,true,null,undefined];
//   let o = { name: "John", age: 30 };

//   return (<div>
//     <h1>{s}</h1>
//     <p>{n}</p>
//     <p>{b}</p>    {/*boolean not show*/}
//     <p>{b ? "True" : "False"}</p>{/*boolean show*/}
//     <p>{nu}</p>
//     <p>{un}</p>
//     <p>{a}</p>
//     <p>{o.name} is {o.age} years old.</p>
//   </div>);
// };

// export default App;

//JSON = JavaScript Object Notation
//JSON is a Obejct that store in Array

// const App = () => {
//   let profile = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Doe", age: 35 },
//   ];

//   // map is Get each element of array single data of object
//   // map is used to iterate over the array and return a new array with the same number of elements.
//   let updatedProfile = profile.map((profile, index) => {
//     return (
//       <li key={index}>
//         <span>Name:{profile.name}</span> |
//         <small>Age:{profile.age}</small>
//       </li>
//     );
//   });
//   return <div>
//     <ol>
//       {updatedProfile}
//     </ol>
//   </div>;
// };

// export default App;

//UseState and SetState

import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("Hello World");
  const ChangeUsername = () => {
    setUsername("Hello React");
    console.log(username);
  };

  return (
    <div>
      <h1>Hello</h1>
      <h2>{username}</h2>
      <button onClick={ChangeUsername}>Change Name</button>
    </div>
  );
};

export default App;
