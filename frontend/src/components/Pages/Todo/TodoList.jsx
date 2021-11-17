import './todo.css';
import React from "react";
import TodoItem from './TodoItem';

export function renderItems(items, ifEmpty=undefined) {
    var index = 0;
    if (items.length !== 0) {
        return items.map(todoItem => <TodoItem key={index++} itemData={todoItem}/>); 
    }
    return ifEmpty && (<li>{ifEmpty}</li>);
}

function TodoList({ listData }) {

    return (
        <div className="todo-list">
            <h3>Todo List</h3>
            <hr/>
            <ul>
                {renderItems(listData.items, 'All done!')}
            </ul>
        </div>
    );
}

export default TodoList;


