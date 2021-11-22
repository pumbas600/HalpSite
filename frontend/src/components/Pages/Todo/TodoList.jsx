import "./todo.css";
import React from "react";
import TodoItem from "./TodoItem";
import TodoItemGroup from "./TodoItemGroup";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';


export function renderItems(items, { ifEmpty, onItemToggled }) {
  return (
    <ul>
      {items.length ? (
        items.map((todoItem, index) => {
          const hasNestedItems = todoItem.items?.length;
          if (hasNestedItems)
            return <TodoItemGroup key={index} itemData={todoItem} onItemToggled={onItemToggled} />

          return <TodoItem key={index} itemData={todoItem} onItemToggled={onItemToggled} />
        })
      ) : (
        ifEmpty && <li>{ifEmpty}</li>
      )}
    </ul>
  );
}

function TodoList({ listData }) {
  return (
    <Card className="todo-list-main">
      <CardContent className="todo-list">
        <Typography variant='h4' className="centre-text todo-list-title">
          Todo List
        </Typography>
        <hr />
        {renderItems(listData.items, { ifEmpty: "All done!" })}
      </CardContent>
    </Card>
  );
}

export default TodoList;
