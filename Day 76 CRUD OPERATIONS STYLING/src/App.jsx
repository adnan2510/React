import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodo] = useState([
    { id: 1, title: "Kuch kaelo", isCompleted: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Create todos={todos} settodo={settodo} />
      <hr className="my-8 w-full max-w-xl border-t border-gray-300" />
      <Read todos={todos} settodo={settodo} />
    </div>
  );
};

export default App;
