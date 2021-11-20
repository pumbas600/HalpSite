import React from "react";
import { renderItems } from "./TodoList"

/**
 * TodoItemGroup is very similar to {@link TodoItem} except that it contains nested items.
 * 
 * @param {any} itemData 
 */
function TodoItemGroup({ itemData }) {
  return (
    <div>
      <div className="list-item">
        <div className="completion-wheel"></div>
        <p>{itemData.content}</p>
      </div>
      {renderItems(itemData.items)}
    </div>
  );
}

export default TodoItemGroup;