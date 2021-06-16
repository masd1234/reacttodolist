import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  const [inputValueTask, setinputValueTask] = useState("");
  const [inputValueCategory, setinputValueCategory] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskDone] = useState(false);

  const clickInput = (e) => {
    e.preventDefault();
    if (!inputValueTask) {
      alert("fill the input");
    } else {
      let numb = Math.floor(Math.random() * 1000);
      let newValue = {
        id: numb,
        category: inputValueCategory,
        task: inputValueTask,
      };

      setTodos([...todos, newValue]);

      setinputValueTask("");
    }
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      clickInput(e);
    }
  };

  return (
    <div className="App" onKeyPress={handleKeypress}>
      <SearchBar
        inputState={inputValueTask}
        setinputValue={setinputValueTask}
        inputValueCategory={inputValueCategory}
        setinputValueCategory={setinputValueCategory}
        todoState={todos}
        setTodos={setTodos}
        clickInput={clickInput}
      />
      <TodoContainer
        todoState={todos}
        setTodos={setTodos}
        taskDone={taskDone}
      />
    </div>
  );
}

export default App;
