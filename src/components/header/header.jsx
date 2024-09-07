import React from 'react';
import close from '../../images/icon-remove.svg';
import './header.css'; 

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="balling header-container">
      <ul>
        {keywords.map((key, index) => (
          <li key={index}>
            <span className="key">{key}</span>
            <button className="button" onClick={() => removeKeywords(key)} aria-label={`Remove ${key}`}>
              <img src={close} alt="" />
            </button>
          </li>
        ))}
        <button onClick={clearAll} className="clear-all-button">
          Clear All
        </button>
      </ul>
    </div>
  );
};

export default Header;
