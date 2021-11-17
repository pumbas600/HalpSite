import React from 'react';
import TodoList from './TodoList';
import TodoData from './TodoData.json';

function Todo() {
    return (
        <div>
            <p>'hello pls'</p>
            <div>
                {
                    TodoData.map(listData => <TodoList key={listData._id} listData={listData}/>)
                }
            </div>
        </div>
    );
}

export default Todo;












