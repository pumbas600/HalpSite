import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Typography } from '@mui/material';
import './todo.css';

function TodoItem({ itemData, onItemToggled }) {
    const [isComplete, setIsComplete] = useState(itemData.isComplete);

    let toggle = () => {
        if (onItemToggled) onItemToggled(!isComplete);
        setIsComplete(!isComplete);
    };

  let toggle = () => {
    if (onItemToggled) onItemToggled(!isComplete);
    setIsComplete(!isComplete);
  };

  return (
    <li>
      <div className="list-row">
        <Checkbox
          defaultChecked={itemData.isComplete}
          onChange={toggle}
          sx={{
            color: "#fff",
            "&.Mui-checked": { color: "#fbeba5" },
            verticalAlign: 'text-top'
          }}
        />
        <Typography variant='body1' className={isComplete ? "checked-style" : "unchecked-style"} 
          style={{verticalAlign: 'text-top'}}
        >
          {itemData.content}
        </Typography>
      </div>
    </li>
  );
}

export default TodoItem;
