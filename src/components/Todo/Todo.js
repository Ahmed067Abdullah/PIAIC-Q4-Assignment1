import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '../IconButton/IconButton';
import classes from './Todo.module.css';

const Todo = ({ todo, onEdit, onDelete, onToggle }) => {
  return <div className={classes['todo-container']}>
    <span className={classes['todo-text']} style={todo.done
      ? { 'textDecoration': 'line-through', opacity: 0.4 }
      : { 'textDecoration': 'none', opacity: 1 }}>{todo.text}</span>
    <div className={classes['todo-actions']}>
      {todo.done
        ? <IconButton title="Undo" color="#3f51b5" icon={<CheckCircleIcon />} onClick={() => onToggle(todo.id)} />
        : <IconButton title="Done" color="#3f51b5" icon={<RadioButtonUncheckedIcon />} onClick={() => onToggle(todo.id)} />}
      <IconButton title="Edit" disabled={todo.done} icon={<EditIcon />} onClick={() => onEdit(todo.id)} />
      <IconButton title="Delete" icon={<DeleteIcon />} onClick={() => onDelete(todo.id)} color="#f50057" />
    </div>
  </div>
};

export default Todo;