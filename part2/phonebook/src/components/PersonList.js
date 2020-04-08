import React from 'react';
import Person from './Person';

function PersonList({persons, filterPattern}) {
    const personComponents = 
        persons
            .filter(({name}) => name.toLowerCase().indexOf(filterPattern.toLowerCase()) >= 0)
            .map((data) => <Person key={data.name} data={data} />);

    return <table>
        <tbody>
            {personComponents}
        </tbody>
    </table>;
}

export default PersonList;