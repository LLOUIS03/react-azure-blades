import React from 'react';
import './BladeHeader.css';

const BladeHeader = ({ title, subTitle }) => {
  return (
    <header>
      <h2 className="title">{title}</h2>
      <small className="sub-title">{subTitle}</small>
      <button className="close">X</button>
    </header>
  );
};

export default BladeHeader;
