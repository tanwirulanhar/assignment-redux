import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/themeSlice';
import './App.css';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
