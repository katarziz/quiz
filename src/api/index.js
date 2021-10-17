import axios from 'axios';

const url = 'http://localhost:4999/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);