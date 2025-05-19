import React, { use } from "react";
import { useState } from "react";
import { nanoid } from "nanoid"; // ✅ Import nanoid
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodo] = useState([
    { id: 1, title: "Kuch kaelo", isCompleted: false },
  ]);

  return (
    <div>
      <Create todos={todos} settodo={settodo} />
      <hr />
      <Read todos={todos} settodo={settodo} />
    </div>
  );
};

export default App;