import React, { useState, useEffect } from 'react';
import entryService from './services/entry';
import Filter from './components/Filter';
import NewEntryForm from './components/NewEntryForm';
import PersonList from './components/PersonList';
import Message from './components/Message';

const App = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ nameLookup, setNameLookup ] = useState({});
  const [ filterPattern, setFilterPattern] = useState('');
  const [ message, setMessage ] = useState();

  const syncWithServer = () => {
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
  };

  useEffect(syncWithServer, []);

  const clearMessage = (myMessage) => {
    if (!myMessage) return;

    clearTimeout(myMessage.timeout);
    setMessage(null);
  };

  const showMessage = (msg, type) => {
    const myMessage = {
      text: msg,
      timeout: setTimeout(() => clearMessage(myMessage), 5000),
      type
    };

    clearMessage(message);
    setMessage(myMessage);
  };

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
        .then(data => {
          setPersons(persons.map(entry => entry.id === nameLookup[newName] ? {...entry, number: newNumber} : entry))
          showMessage(`Entry ${newName} has been updated.`, 1 /* success */);
        })
        .catch(({response: {data: { message }}}) => {
          showMessage(message, 2);
          syncWithServer();
        });
      
      
    } else {
      entryService
        .create({name: newName, number: newNumber})
        .then(data => {
          setPersons(persons.concat(data));
          setNameLookup({...nameLookup, [data.name]: data.id});
          showMessage(`Entry ${newName} has been created.`, 1 /* success */);
        })
        .catch(({response: {data: { message }}}) => showMessage(message, 2));
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
        showMessage(`Entry ${name} has been removed.`, 1 /* success */);
      })
      .catch(({response: {data: { message }}}) => {
        showMessage(message, 2);
        syncWithServer();
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {!!message ? <Message message={message} /> : null}
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

export default App;