import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons/';

const getAll = () =>
    axios
        .get(baseUrl)
        .then(response => response.data);

const create = (entry) => 
    axios
        .post(baseUrl, entry)
        .then(response => response.data);

const remove = id => 
    axios
        .delete(baseUrl + id)
        .then(response => response.data);

const update = data => 
    axios
        .put(baseUrl + data.id, data)
        .then(response => response.data);

export default { create, getAll, remove, update };