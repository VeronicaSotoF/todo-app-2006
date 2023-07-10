import { useState, useContext } from "react";
import { Button, TextField, Box, FormControl } from "@mui/material";
import TodosContext from "../context/todos";

function TodoCreate() {
  const [text, setText] = useState("");
  const { createTodo } = useContext(TodosContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text !== "") {
      createTodo(text);
    }

    setText("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div>
        <FormControl
          onSubmit={handleSubmit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        >
          <TextField
            label="Add New Todo"
            fullWidth
            sx={{ marginRight: "8px" }}
            value={text}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="large"
          sx={{ padding: "14px 24px", marginLeft: "8px" }}
        >
          Add
        </Button>
      </div>
    </Box>
  );
}

export default TodoCreate;
