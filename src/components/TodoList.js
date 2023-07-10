import { useContext } from "react";
import TodosContext from "../context/todos";
import TodoShow from "./TodoShow";
import { Grid } from "@mui/material";

function TodoList() {
  const { todos, hideCompletedToggle } = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => {
    return (
      <Grid item key={todo.id}>
        <TodoShow todo={todo} />
      </Grid>
    );
  });

  const renderedIncompletedTodos = todos.map((todo) => {
    if (todo.completed === false) {
      return (
        <Grid item key={todo.id}>
          <TodoShow todo={todo} />
        </Grid>
      );
    } else {
      return <div key={todo.id}></div>;
    }
  });

  if (hideCompletedToggle === false) {
    return (
      <Grid
        container
        my={3}
        spacing={2}
        sx={{ marginBottom: "0", justifyContent: "space-evenly" }}
      >
        {renderedTodos}
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        my={3}
        spacing={2}
        sx={{ marginBottom: "0", justifyContent: "space-evenly" }}
      >
        {renderedIncompletedTodos}
      </Grid>
    );
  }
}

export default TodoList;
