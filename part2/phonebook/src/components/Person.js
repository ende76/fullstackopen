import React from 'react';

export default ({data:{id, name, number}, makeClickHandler}) => 
    <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td><button onClick={makeClickHandler({id, name})}>delete</button></td>
    </tr>;
