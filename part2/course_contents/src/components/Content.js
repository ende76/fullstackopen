import React from 'react';
import Part from './Part';

function Content({ parts }) {
    const partComponents = parts.map(({name, exercises}) => 
        <Part
            key={name}
            name={name}
            exercises={exercises}
        />
    );

    return <table>
        <tbody>
            {partComponents}
        </tbody>
    </table>
}

export default Content;