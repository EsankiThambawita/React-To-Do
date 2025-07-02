import React from "react";

export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="What's the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
};
