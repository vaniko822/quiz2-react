import React, { useState } from 'react';
import EditIcon from '../edit-icon.svg'
import DeleteIcon from '../delete-icon.svg'

const TodoItem = ({ todo, index, deleteTodo, updateTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(index, { ...todo, title: newTitle });
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
        <div className="todo-item-content">
          <div className="todo-item-left">
            <input className="note-checkbox" type="checkbox"></input>
            <span className="title-sp-text">{todo.title}</span>
          </div>
          <div className="todo-item-right">
            <button className="edit-btn" onClick={() => setEditing(true)}><img src={EditIcon} alt="not found"></img></button>
            <button className="delete-btn" onClick={() => deleteTodo(index)}><img src={DeleteIcon} alt="not found"></img></button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
