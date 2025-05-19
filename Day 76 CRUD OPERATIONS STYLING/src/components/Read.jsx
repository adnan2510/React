import { Fragment } from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodo = props.settodo;

  const renderTodos = todos.map((todo) => (
    <li
      key={todo.id}
      className="bg-white rounded shadow p-3 mb-2 text-gray-700 text-lg"
    >
      {todo.title}
    </li>
  ));

  return (
    <Fragment>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4 text-center">
        Todo List
      </h2>
      <ol className="w-full max-w-xl">{renderTodos}</ol>
    </Fragment>
  );
};

export default Read;
