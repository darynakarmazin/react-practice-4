import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const toDosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo(state, { payload: newTodo }) {
      state.todos = [...state.todos, newTodo];
    },
    deleteToDo(state, { payload: removeId }) {
      state.todos = state.todos.filter(({ id }) => id !== removeId);
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addToDo, deleteToDo, incrementByAmount } = toDosSlice.actions;
export default toDosSlice.reducer;
export const selectTodos = state => state.todos;
