import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  inputState,
  inputValueCategory,
  setinputValueCategory,
  setinputValue,
  clickInput,
}) => {
  const options = [
    {
      label: "",
      value: "",
    },
    {
      label: "Home",
      value: "Home",
    },
    {
      label: "School",
      value: "School",
    },
    {
      label: "Work",
      value: "Work",
    },
    {
      label: "Finance",
      value: "Finance",
    },
    {
      label: "Miscellaneous",
      value: "Miscellaneous",
    },
  ];

  const inputReaderTask = (e) => {
    setinputValue(e.target.value);
  };

  const inputReaderCategory = (e) => {
    setinputValueCategory(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="logo">My Todo List</h1>

      <div className="inputContainer">
        <label className="label" htmlFor="category">
          Category:
        </label>

        <select
          value={inputValueCategory}
          onChange={inputReaderCategory}
          className="input"
          type="text"
          id="inputCategory"
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label className="label" htmlFor="todo">
          Todo:
        </label>
        <input
          className="input"
          type="text"
          id="inputTodo"
          onChange={inputReaderTask}
          value={inputState}
        ></input>
        <br />
        <button className="button" onClick={clickInput}>
          Add
        </button>
      </div>
    </header>
  );
};

export default SearchBar;
