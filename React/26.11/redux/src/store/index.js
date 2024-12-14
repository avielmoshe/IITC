import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/TodoReducer.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
