import React from 'react';

export default ({ name, makeClickHandler }) => <li>{name} <button onClick={makeClickHandler(name)}>show</button></li>;