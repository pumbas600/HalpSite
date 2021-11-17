import React, { useState } from "react";
import { renderItems } from "./TodoList";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./todoitem.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TodoItem({ itemData }) {
  const [checked, setChecked] = useState(false);

  let toggle = () => {
    setChecked(!checked);
  };
  return (
    <li>
      <FormGroup>
        <FormControlLabel
          className={checked ? "checkedStyle" : "uncheckedStyle"}
          control={
            <Checkbox
              defaultChecked
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
