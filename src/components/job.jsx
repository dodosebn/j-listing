import React from "react";
import svgMap from "./svgImports";
import "../job.css";

const Job = (props) => {
  const {
    company,
    contract,
    featured,
    logo,
    position,
    postedAt,
    role,
    languages,
    level,
    location,
    tools,
    new: isNew,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];
  const iconName = logo.split("/").pop(); 
  const icon = svgMap[iconName] || "";

  return (
    <div className="job-container">
      <div className="job-holder">
        <div className="logo">
          <img src={icon} alt={`Logo for ${company}`} />
        </div>

        <div className="part1">
          <div className="company">
            <div className="cname">{company}</div>
            {isNew && <span className="new">new!</span>}
            {featured && <span className="featured">featured</span>}
          </div>
          <div className="position">{position}</div>
          <div className="details">
            <span>{postedAt}</span>
            <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <span>{contract}</span>
            <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="part2">
          {keywords.map((key, index) => (
            <button onClick={() => props.setKeywords(key)} key={index}>
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
