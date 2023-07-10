import { useEffect, useContext } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { Box, FormControlLabel, Switch } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TodosContext from "./context/todos";
import ThemeContext from "./context/theme";
import { purple, green, deepOrange, cyan } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: cyan[500],
    },
  },
});

function App() {
  const { todos, setTodos, hideCompleted, hideCompletedToggle } =
    useContext(TodosContext);
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <Box sx={{ padding: "16px" }}>
          <FormControlLabel
            sx={{ marginBottom: "16px" }}
            label="Hide Completed"
            control={
              <Switch
                checked={hideCompletedToggle}
                onChange={hideCompleted}
                color="primary"
              />
            }
          />
          <FormControlLabel
            sx={{ marginBottom: "16px" }}
            label="Dark Theme"
            control={
              <Switch
                checked={isDarkTheme}
                onChange={toggleDarkTheme}
                color="primary"
              />
            }
          />
          <TodoCreate />
          <TodoList />
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
