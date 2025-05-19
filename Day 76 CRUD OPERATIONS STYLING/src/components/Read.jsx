import { Fragment } from "react";

const Read = (props) => {
    const todos = props.todos;
    const settodo = props.settodo;
  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <Fragment>
      <h2>Todo List</h2>
      <ol>{renderTodos}</ol>
    </Fragment>
  );
};

export default Read;