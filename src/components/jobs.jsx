import React, { useEffect, useState, useCallback } from 'react';
import Job from './job'; 
import '../job.css';

const Jobs = ({ data, setKeywords, keywords }) => {
  const [filteredData, setFilteredData] = useState(data);

  // Memoize filterData to prevent unnecessary re-creations
  const filterData = useCallback(() => {
    if (keywords.length > 0) {
      const newData = data.filter(d => 
        keywords.every(key => 
          d.role === key ||
          d.level === key ||
          d.languages.includes(key) ||
          d.tools.includes(key)
        )
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  }, [data, keywords]); // Include data and keywords in the dependency array

  // Use useEffect to run filterData when keywords or data change
  useEffect(() => {
    filterData();
  }, [filterData]); // Include filterData in the dependency array

  return (
    <div className="jobs">
      {filteredData.map(d => (
        <Job key={d.id} data={d} setKeywords={setKeywords} />
      ))}
    </div>
  );
};

export default Jobs;
