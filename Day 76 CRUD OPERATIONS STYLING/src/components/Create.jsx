import { Fragment, useState } from "react";
import { nanoid } from "nanoid"; // ✅ Import nanoid

const Create = (props) => {
  const todos = props.todos;
  const settodo = props.settodo;
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

    let copytodos = [...todos]; // Create a copy of the existing todos
    copytodos.push(newTodo); // Add the new todo to the copy
    settodo(copytodos); // Update the state with the new copy

    settitle(""); // Clear the input field after submission
    // settodo([...todo, newTodo]); // Update the state with the new todo
  };

  return (
    <Fragment>
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Todo App</h1>
      <form
        onSubmit={SubmitHandeler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl"
      >
        <input
          type="text"
          onChange={(event) => settitle(event.target.value)}
          value={title}
          placeholder="Add a new todo"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* 
        <br />
        <input
          checked={completed}
          onChange={(event) => setcompleted(event.target.checked)}
          type="checkbox"
        />
        Completed
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
        <select value={city} onChange={(event) => setcity(event.target.value)}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </select> 
        */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Create;
