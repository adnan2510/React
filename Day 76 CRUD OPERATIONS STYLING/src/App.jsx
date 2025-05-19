import React, { use } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"; // ✅ Import nanoid

const App = () => {
  const [todos, settodo] = useState([
    { id: 1, title: "Kuch kaelo", isCompleted: false },
  ]);
  const [title, settitle] = useState("");
  // const [completed, setcompleted] = useState(true);
  // const [gender, setgender] = useState("Male");
  // const [city, setcity] = useState("Chennai");
  const SubmitHandeler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let copytodos = [...todos];// Create a copy of the existing todos
    copytodos.push(newTodo);// Add the new todo to the copy
    settodo(copytodos);// Update the state with the new copy

    // settodo([...todo, newTodo]); // Update the state with the new todo
  };

  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={SubmitHandeler}>
        <input
          type="text"
          onChange={(event) => settitle(event.target.value)}
          value={title}
          placeholder="Add a new todo"
        />
        {/*  <br />
        <br />
        <input
          checked={completed}
          onChange={(event) => setcompleted(event.target.checked)}
          type="checkbox"
          name=""
          id=""
        />
        Completed
        <br />
        <br />
        <input
          value="Male"
          onChange={(event) => setgender(event.target.value)}
          type="radio"
          checked={gender == "Male" && true}
        />
        Male
        <input
          value="Female"
          onChange={(event) => setgender(event.target.value)}
          type="radio"
          checked={gender == "Female" && true}
        />
        Female
        <br />
        <br />
        <select value={city} onChange={(event) => setcity(event.target.value)}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </select>*/}
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      <hr />
      <h2>Todo List</h2>
      <ul>
        {renderTodos}
       
       </ul>
    </div>
  );
};

export default App;
