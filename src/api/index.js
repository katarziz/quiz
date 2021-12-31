import axios from 'axios';

const url = 'http://humboldt4future.sytes.net:4999/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);