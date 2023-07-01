import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const toDosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addToDo, decrement, incrementByAmount } = toDosSlice.actions;
export default toDosSlice.reducer;
