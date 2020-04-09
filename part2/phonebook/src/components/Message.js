import React from 'react';

export default ({message: {text, type}}) => 
    <div className={"message " + (type === 1 ? "success" : "error")}>
        <span>{text}</span>
    </div>;