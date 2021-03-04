import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    'todos': [
      {
        'id': '1',
        'text': "Todo 1",
        'done': true,
      },
      {
        'id': '2',
        'text': "Todo 2",
        'done': false,
      },
    ]
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({
        text: payload,
        id: uuidv4(),
        done: false
      })
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map(t => t.id === payload.id
        ? { ...t, text: payload.text }
        : t)
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(t => t.id !== payload)
    },
    toggleDone: (state, { payload }) => {
      state.todos = state.todos.map(t => t.id === payload
        ? { ...t, done: !t.done }
        : t)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleDone, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;