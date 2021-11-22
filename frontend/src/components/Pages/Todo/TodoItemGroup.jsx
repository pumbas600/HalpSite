import React, { useEffect, useState } from 'react';
import { renderItems } from './TodoList';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import './todo.css';

function TodoItemGroup({ itemData, onItemToggled }) {
    const [completedItems, setCompletedItems] = useState(completedItemCount());
    const [isComplete, setIsComplete] = useState(completedItems === itemData.items.length);

    useEffect(() => {
        const checkedIsCompleted = completedItems === itemData.items.length;
        if (isComplete !== checkedIsCompleted) {
            if (onItemToggled) onItemToggled(checkedIsCompleted);
            setIsComplete(checkedIsCompleted);
        }
    }, [completedItems, isComplete, itemData.items.length, onItemToggled]);

    function completedItemCount() {
        return itemData.items.filter((itemData) => itemData.isComplete).length;
    }

    function onChildItemToggled(isComplete) {
        if (isComplete) setCompletedItems(completedItems + 1);
        else setCompletedItems(completedItems - 1);
    }

    return (
        <li>
            <div className="list-row">
                <div className={`list-row group-list-icon ${isComplete ? 'completed' : ''}`}>
                    <LibraryAddCheckIcon />
                    <p>{`${completedItems}/${itemData.items.length}`}</p>
                </div>
                <p className={isComplete ? 'checked-style' : 'unchecked-style'}>{itemData.content}</p>
            </div>
            {renderItems(itemData.items, { onItemToggled: onChildItemToggled })}
        </li>
    );
}

export default TodoItemGroup;
