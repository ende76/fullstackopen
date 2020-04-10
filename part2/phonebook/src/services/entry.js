import axios from 'axios';

const BASE_URL = '/api/persons/';

const getAll = () =>
    axios
        .get(BASE_URL)
        .then(response => response.data);

const create = (entry) => 
    axios
        .post(BASE_URL, entry)
        .then(response => response.data);

const remove = id => 
    axios
        .delete(BASE_URL + id)
        .then(response => response.data);

const update = data => 
    axios
        .put(BASE_URL + data.id, data)
        .then(response => response.data);

export default { create, getAll, remove, update };