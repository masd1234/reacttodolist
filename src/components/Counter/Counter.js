import React from "react";
import "./Counter.css";

const Counter = ({ todos, taskDone }) => {
  return (
    <div className="containerCounter">
      <div className="count" id="todosCount">
        <p>Todos:</p>
        <h1>{todos.length}</h1>
      </div>
      <div className="count" id="todosComplete">
        <p>Completed: </p>
        <h1>{taskDone}</h1>
      </div>
    </div>
  );
};

export default Counter;
