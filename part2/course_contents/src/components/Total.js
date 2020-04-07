import React from 'react';

export default ({ parts }) => <p className="total">total of {parts.reduce(((sum, {exercises}) => sum + exercises), 0)} exercises</p>