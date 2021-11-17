import React, { useState } from "react";
import { renderItems } from "./TodoList";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./todoitem.css";

function TodoItem({ itemData }) {

  const [isComplete, setIsComplete] = useState(itemData.isComplete);

  let toggle = () => {
    setIsComplete(!isComplete);
  };
  return (
    <li>
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
      {itemData.items && itemData.items.length !== 0 && (
        <ul>{renderItems(itemData.items)}</ul>
      )}
    </li>
  );
}

export default TodoItem;
