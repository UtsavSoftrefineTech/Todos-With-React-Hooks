import { createContext, useContext } from "react";

// create context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// create custom hook to use todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// create provider for todo context
export const TodoProvider = TodoContext.Provider;
