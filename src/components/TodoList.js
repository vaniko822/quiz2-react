import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoModal from './AddTodoModal';
import SearchBar from './SearchBar';
import AddNoteIcon from '../add-note-icon.png'
import EmptyIcon from '../empty-icon.png'

const TodoList = ({ toggleDarkMode, darkMode }) => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = todos.slice();
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="todo-list">
      <SearchBar 
        setSearchQuery={setSearchQuery}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <button className="add-note-btn" onClick={() => setModalOpen(true)}><img src={AddNoteIcon} alt="not found"></img></button>
      
      {isModalOpen && (
        <AddTodoModal
          addTodo={addTodo}
          closeModal={() => setModalOpen(false)}
        />
      )}
      
      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          <img src={EmptyIcon} alt="No todos" className="empty-image" />
          <p>Empty...</p>
        </div>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            index={index}
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo} 
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
