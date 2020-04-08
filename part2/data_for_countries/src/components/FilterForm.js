import React from 'react';

export default ({ filterPattern, handleSubmit, handleChange }) =>
    <form onSubmit={handleSubmit}>
        <label>find countries</label>
        <input value={filterPattern} onChange={handleChange} />
    </form>;