import React, { useState } from "react";
import { renderItems } from "./TodoList";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./todoitem.css";

function TodoItem({ itemData }) {

  const [isComplete, setIsComplete] = useState(itemData.isComplete);

  const hasNestedItems = itemData.items && itemData.items.length !== 0;

  let toggle = () => {
    setIsComplete(!isComplete);
  };
  return (
    <li>
      {hasNestedItems ? (
        <div>
          <div className="list-item">
            <div className="completion-wheel"></div>
            <p>{itemData.content}</p>
          </div>
          <ul>{renderItems(itemData.items)}</ul>
        </div>
      ) : (
        <FormGroup>
          <FormControlLabel
            className={isComplete ? "checkedStyle" : "uncheckedStyle"}
            control={
              <Checkbox
                defaultChecked={itemData.isComplete}
                onChange={toggle}
                sx={{
                  color: "#fff",
                  "&.Mui-checked": { color: "#FBEBA5" },
                }}
              />
            }
            label={itemData.content}
          />
        </FormGroup>
      )}
    </li>
  );
}

export default TodoItem;
