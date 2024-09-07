import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Jobs from './components/jobs';
import Header from './components/header/header';

const App = () => {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (keyword) => {
    if (!filterKeywords.includes(keyword)) {
      setFilterKeywords([...filterKeywords, keyword]);
    }
  };

  const deleteKeyword = (keyword) => {
    const newKeywords = filterKeywords.filter(key => key !== keyword);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <div>
      <div className='header-container'>
        <div className='box header'></div>
        {filterKeywords.length > 0 && (
          <Header
            keywords={filterKeywords}
            removeKeywords={deleteKeyword}
            clearAll={clearAll}
          />
        )}
      </div>
      <Jobs data={data} setKeywords={addFilterKeywords} keywords={filterKeywords}/>
    </div>
  );
};

export default App;
