import React from "react";
import "./TodoContainer.css";

const TodoContainer = ({ todoState, setTodos, taskDone, setTaskDone }) => {
  const checkItems = (e) => {
    e.target.parentNode.parentNode.classList.toggle("taskDone");

    if (e.target.parentNode.parentNode.classList.contains("taskDone")) {
      taskDone++;
      setTaskDone(taskDone);
    } else if (!taskDone) {
      e.stopPropagation();
    } else {
      taskDone--;
      setTaskDone(taskDone);
    }
  };

  const deleteItems = (e) => {
    let filteredArr = todoState.filter((el) => {
      return el.id !== parseInt(e.target.id);
    });

    if (
      taskDone === 0 &&
      e.target.parentNode.parentNode.classList.contains("itemContainer")
    ) {
      e.stopPropagation();
    } else if (
      taskDone >= 0 &&
      e.target.parentNode.parentNode.classList.contains("taskDone") &&
      parseInt(e.target.id)
    ) {
      e.target.parentNode.parentNode.classList.remove("taskDone");
      taskDone--;
      setTaskDone(taskDone);
    }

    setTodos([...filteredArr]);
  };

  return (
    <div className="container">
      <div className="todosTitle">
        <h1>Todos:</h1>
      </div>
      <div className="todosContainer">
        {todoState.map((item, i) => {
          return (
            <div className="itemContainer" id={item.id} key={i}>
              <div className="categoryContainer">
                <h1>Category: {item.category}</h1>
              </div>
              <div className="taskContainer">
                <h1>Task: {item.task}</h1>
                <button
                  className="buttonTask buttonTaskDone"
                  id={item.id}
                  onClick={(e) => checkItems(e)}
                >
                  V
                </button>
                <button
                  className="buttonTask buttonTaskDetele"
                  id={item.id}
                  onClick={(e) => deleteItems(e)}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoContainer;
