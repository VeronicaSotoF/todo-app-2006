import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider as TodosProvider } from "./context/todos.js";
import { Provider as ThemeProvider } from "./context/theme.js";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <TodosProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </TodosProvider>
);
