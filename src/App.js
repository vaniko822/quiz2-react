import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './styles/main.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="App">
      <div className="text-todo-list">TODO LIST</div>
      <TodoList 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
    </div>
  );
};

export default App;
