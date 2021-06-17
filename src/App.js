import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  const [inputValueTask, setinputValueTask] = useState("");
  const [inputValueCategory, setinputValueCategory] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskDone, setTaskDone] = useState(0);

  const clickInput = (e) => {
    e.preventDefault();

    if (!inputValueCategory || !inputValueTask) {
      alert("Please fill all the inputs");
    } else {
      let numb = Math.floor(Math.random() * 1000);
      let newValue = {
        id: numb,
        category: inputValueCategory,
        task: inputValueTask,
        complete: false,
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
      <Counter todos={todos} taskDone={taskDone} />
      <TodoContainer
        todoState={todos}
        setTodos={setTodos}
        taskDone={taskDone}
        setTaskDone={setTaskDone}
      />
    </div>
  );
}

export default App;
