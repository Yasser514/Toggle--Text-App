
import { useState } from 'react';

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="toggle-container">
      <h1 className="title">✨ Toggle Message</h1>
      
      <button
        id="toggle-button"
        onClick={handleToggleVisibility}
        aria-expanded={isVisible}
        aria-label={isVisible ? 'Hide message' : 'Show message'}
      >
        <span className="btn-icon">{isVisible ? '👁️' : '👁️‍🗨️'}</span>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {isVisible && (
        <p id="message">
          💖 I love freeCodeCamp!
        </p>
      )}
    </div>
  );
};