import React from 'react';

export default ({newName, setNewName, newNumber, setNewNumber, handleSubmit}) =>
    <form onSubmit={handleSubmit}>
        <table>
        <tbody>
            <tr>
            <td>name:</td>
            <td><input value={newName} onChange={(e) => setNewName(e.target.value)} /></td>
            </tr>
            <tr>
            <td>number:</td>
            <td><input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></td>
            </tr>
        </tbody>
        </table>
        <div>
        <button type="submit">add</button>
        </div>
    </form>;
