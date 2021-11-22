import './todo.css';
import React from 'react';
import TodoItem from './TodoItem';
import TodoItemGroup from './TodoItemGroup';

export function renderItems(items, { ifEmpty, onItemToggled }) {
    return (
        <ul>
            {items.length
                ? items.map((todoItem, index) => {
                      const hasNestedItems = todoItem.items?.length;
                      if (hasNestedItems)
                          return <TodoItemGroup key={index} itemData={todoItem} onItemToggled={onItemToggled} />;

                      return <TodoItem key={index} itemData={todoItem} onItemToggled={onItemToggled} />;
                  })
                : ifEmpty && <li>{ifEmpty}</li>}
        </ul>
    );
}

function TodoList({ listData }) {
    return (
        <div className="todo-list" id={listData._id}>
            <h3>Todo List</h3>
            <hr />
            {renderItems(listData.items, { ifEmpty: 'All done!' })}
        </div>
    );
}

export default TodoList;
