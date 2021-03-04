import { configureStore } from '@reduxjs/toolkit';
import todos from '../containers/Todos/Todos.slice';

export default configureStore({
  reducer: { todos }
});
