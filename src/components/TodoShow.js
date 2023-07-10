import { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TodosContext from "../context/todos";

function TodoShow({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);
  const { markAsCompletedById, deleteTodoById } = useContext(TodosContext);

  const handleClick = () => {
    deleteTodoById(todo.id);
  };

  const handleCompleted = (event) => {
    setCompleted(event.target.checked);
    markAsCompletedById(todo.id);
  };

  return (
    <Box width="300px" height="317.924px">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={`https://picsum.photos/seed/${todo.id}/300/200`}
          alt="picsum image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {todo.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ marginRight: "16px", marginLeft: "2px" }}
            size="small"
            color="secondary"
            onClick={handleClick}
          >
            Delete
          </Button>
          <FormControlLabel
            label="Completed"
            control={
              <Checkbox
                size="small"
                color="primary"
                checked={completed}
                onChange={handleCompleted}
              />
            }
          />
        </CardActions>
      </Card>
    </Box>
  );
}

export default TodoShow;
