import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Update the theme on the entire document body
    document.body.classList.toggle('dark-mode', newMode);
    document.body.classList.toggle('light-mode', !newMode)
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        <span className="slider round"></span>
      </label>

    </div>
  );
};

export default ThemeToggle;


