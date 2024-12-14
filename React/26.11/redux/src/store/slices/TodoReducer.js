import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todo: [] },
  reducers: {
    ADD_TODO: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    DELETE_TODO: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    TOGGLE_TODO: (state, action) => {
      const todoClick = state.todo.find((todo) => todo.id === action.payload);
      todoClick.completed = !todoClick.completed;
    },
  },
});

export const { ADD_TODO, DELETE_TODO, TOGGLE_TODO } = todoSlice.actions;
export default todoSlice.reducer;
