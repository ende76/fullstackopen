import React from 'react';
import Person from './Person';

function PersonList({persons, filterPattern, makeClickHandler}) {
    const personComponents = 
        persons
            .filter(({name}) => name.toLowerCase().indexOf(filterPattern.toLowerCase()) >= 0)
            .map((data) => <Person key={data.id} data={data} makeClickHandler={makeClickHandler} />);

    return <table>
        <tbody>
            {personComponents}
        </tbody>
    </table>;
}

export default PersonList;