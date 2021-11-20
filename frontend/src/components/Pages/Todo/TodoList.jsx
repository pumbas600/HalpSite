import "./todo.css";
import React from "react";
import TodoItem from "./TodoItem";

export function renderItems(items, ifEmpty = undefined) {
  var index = 0;
  return (
    <ul>
      {items.length !== 0 ? (
        items.map((todoItem) => (
          <TodoItem key={index++} itemData={todoItem} />
        ))
      ) : (
        ifEmpty && <li>{ifEmpty}</li>
      )}
    </ul>
  );
}

function TodoList({ listData }) {
  return (
    <div className="todo-list" id={listData._id}>
      <h3>Todo List</h3>
      <hr />
      {renderItems(listData.items, "All done!")}
    </div>
  );
}

export default TodoList;
