import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./todoitem.css";

function TodoItem({ itemData, onItemToggled }) {

  const [isComplete, setIsComplete] = useState(itemData.isComplete);

  let toggle = () => {
    if (onItemToggled) onItemToggled(!isComplete);
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
    </li>
  );
}

export default TodoItem;
