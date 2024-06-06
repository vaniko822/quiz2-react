import React, { useState } from 'react';

const AddTodoModal = ({ addTodo, closeModal }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    addTodo({
      title
    });
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>NEW NOTE</h2>
        <input className="input-todo-new"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input your note..."
        />
        <div className="add-note-btns-cont">
          <button className="btn-add-note" onClick={closeModal}>CANCEL</button>
          <button className="btn-add-note" onClick={handleSubmit}>APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
