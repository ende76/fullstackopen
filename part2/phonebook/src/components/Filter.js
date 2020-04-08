import React from 'react';

export default ({ filterPattern, setFilterPattern }) =>
    <>
        <span>filter shown with</span> 
        <input value={filterPattern} onChange={(e) => setFilterPattern(e.target.value)}/> 
    </>;