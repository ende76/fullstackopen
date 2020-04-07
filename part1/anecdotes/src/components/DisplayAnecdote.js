import React from 'react';

function DisplayAnecdote({title, anecdote}) {
    return <>
        <h1>{title}</h1>
        <p>{anecdote}</p>
    </>;
}

export default DisplayAnecdote;