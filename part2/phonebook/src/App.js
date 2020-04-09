import React, { useState, useEffect } from 'react';
import entryService from './services/entry';
import Filter from './components/Filter';
import NewEntryForm from './components/NewEntryForm';
import PersonList from './components/PersonList';

const App = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ nameLookup, setNameLookup ] = useState({});
  const [ filterPattern, setFilterPattern] = useState('');

  useEffect(() => {
    entryService
      .getAll()
      .then(data => {
        setPersons(data);
        const lookup = {};
        data.forEach(entry => {
          lookup[entry.name] = entry.id;
        });
        setNameLookup(lookup);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName === '') {
      alert('no name entered');
      return;
    }

    if (!!nameLookup[newName]) {
      if (!window.confirm(`${newName} is already added to phonebook. Would you like to update the existing number?`)) {
        return;
      }

      entryService
        .update({id: nameLookup[newName], name: newName, number: newNumber})
        .then(data => setPersons(persons.map(entry => entry.id === nameLookup[newName] ? {...entry, number: newNumber} : entry)));
    } else {
      entryService
      .create({name: newName, number: newNumber})
      .then(data => {
        setPersons(persons.concat(data));
        setNameLookup({...nameLookup, [data.name]: data.id});
      });
    }

    setNewName('');
    setNewNumber('');  
  };

  const makeClickHandler = ({ id, name }) => (e) => {
    if (!window.confirm(`delete ${name}?`)) return;

    entryService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
        setNameLookup({...nameLookup, [name]: false});
      });
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
      <PersonList persons={persons} filterPattern={filterPattern} makeClickHandler={makeClickHandler} />
    </div>
  )
}

export default App