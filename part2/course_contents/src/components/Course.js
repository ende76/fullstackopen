import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

export default ({course: {name, parts}}) => <div>
    <Header name={name} />
    <Content parts={parts} />
    <Total parts={parts} />
</div>;