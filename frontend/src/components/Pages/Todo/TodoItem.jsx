import React from 'react';
import { renderItems } from './TodoList';

function TodoItem({ itemData }) {
    return (
        <li>
            <p>{itemData.content}</p>
            {itemData.items && itemData.items.length !== 0 &&
                (<ul>
                    {renderItems(itemData.items)}
                </ul>)
            }
        </li>
    );
}

export default TodoItem;