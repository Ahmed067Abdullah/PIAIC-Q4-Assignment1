import React, { useState } from 'react';
import { addTodo, deleteTodo, toggleDone, updateTodo } from "./Todos.slice";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Todo from '../../components/Todo/Todo';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import classes from './Todos.module.css';
import Button from '../../components/Button/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    "& input": {
      padding: '14px 10px',
    },
    marginRight: '6px'
  },
}));

let oldText = "";

const Todos = () => {

  const [text, setText] = useState("");
  const [editing, setEditing] = useState(null);
  const jssClasses = useStyles();

  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const submitHandler = () => {
    if (!text.trim()) return;
    if (editing) {
      dispatch(updateTodo({ id: editing, text: text.trim() }));
    } else {
      dispatch(addTodo(text.trim()));
    }
    cancelUpdateHandler();
  };

  const cancelUpdateHandler = () => {
    setText("");
    setEditing(null);
    oldText = "";
  }

  const toggleDoneTodoHandler = id => {
    dispatch(toggleDone(id));
    if (editing === id) {
      cancelUpdateHandler();
    }
  };

  const editTodoHandler = id => {
    setEditing(id);
    const editTodo = todos.find(t => t.id === id);
    setText(editTodo.text);
    oldText = editTodo.text;
    document.getElementById("text-input").focus();
  };

  const deleteTodoHandler = id => {
    dispatch(deleteTodo(id));
    if (editing === id) {
      cancelUpdateHandler();
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.heading}>Todo App</p>
      <div className={classes['input-container']}>
        <TextField
          classes={{ root: jssClasses.textField }}
          id="text-input"
          variant="outlined"
          value={text}
          onChange={e => setText(e.target.value)}
          fullWidth
          placeholder="Write here..."
        />
        {editing
          ? <>
            <Button disabled={oldText === text.trim()} onClick={submitHandler}>
              <DoneIcon />
            </Button>
            <Button
              disabled={!text}
              color="secondary"
              onClick={cancelUpdateHandler}
              style={{ marginLeft: 6 }}>
              <ClearIcon />
            </Button>
          </>
          : <Button disabled={!text} onClick={submitHandler}>
            <AddIcon />
          </Button>}
      </div>
      <div className={classes['todos-container']}>
        {todos.map(todo => <Todo
          key={todo.id}
          todo={todo}
          setEditing={setEditing}
          onToggle={toggleDoneTodoHandler}
          onEdit={editTodoHandler}
          onDelete={deleteTodoHandler}
        />)}
      </div>
    </div>
  );
};

export default Todos;
