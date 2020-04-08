import React, { useState } from 'react';
import Filter from './components/Filter';
import NewEntryForm from './components/NewEntryForm';
import PersonList from './components/PersonList';

const App = () => {
  const [ persons, setPersons] = useState([
    {name: 'abc def', number: '012345'}, 
    {name: 'ghi jek', number: '098765'},
    {name: 'GHi dEF', number: '0xdeadcode'},
  ]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ nameLookup, setNameLookup ] = useState({});
  const [ filterPattern, setFilterPattern] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName === '') {
      alert('no name entered');
      return;
    }

    if (!!nameLookup[newName]) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');

    setNameLookup({...nameLookup, [newName]: true});
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        filterPattern={filterPattern}
        setFilterPattern={setFilterPattern}
      />
      <h2>add a new</h2>
      <NewEntryForm 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filterPattern={filterPattern} />
    </div>
  )
}

export default App