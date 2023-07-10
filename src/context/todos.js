import { createContext, useState } from "react";

const TodosContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);
  const [hideCompletedToggle, setHideCompletedToggle] = useState(false);

  const createTodo = (text) => {
    const updatedTodos = [
      ...todos,
      {
        id: Math.round(Math.random() * 9999),
        text: text,
        completed: false,
      },
    ];

    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  };

  const markAsCompletedById = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const hideCompleted = (event) => {
    setHideCompletedToggle(event.target.checked);
  };

  const valueToShare = {
    todos,
    hideCompletedToggle,
    setTodos,
    createTodo,
    deleteTodoById,
    markAsCompletedById,
    hideCompleted,
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;
