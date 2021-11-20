import React, { useEffect, useState } from "react";
import { renderItems } from "./TodoList"
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

/**
 * TodoItemGroup is very similar to {@link TodoItem} except that it contains nested items.
 * 
 * @param {any} itemData 
 */
function TodoItemGroup({ itemData, onItemToggled }) {

  const [completedItems, setCompletedItems] = useState(completedItemCount());

  useEffect(() => {
    if (onItemToggled) 
      onItemToggled(completedItems === itemData.items.length);
  }, [completedItems, itemData.items.length, onItemToggled]);

  function completedItemCount() {
    return itemData.items.filter(itemData => itemData.isComplete).length;
  }

  function onChildItemToggled(isComplete) {
    if (isComplete) 
      setCompletedItems(completedItems + 1);
    else setCompletedItems(completedItems - 1);
  }

  return (
    <div>
      <div className="list-row">
        <div className="list-row group-list-icon">
          <LibraryAddCheckIcon />
          <p>{`${completedItems}/${itemData.items.length}`}</p>
        </div>
        <p>{itemData.content}</p>
      </div>
      {renderItems(itemData.items, { onItemToggled: onChildItemToggled })}
    </div>
  );
}

export default TodoItemGroup;