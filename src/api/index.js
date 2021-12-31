import axios from 'axios';

<<<<<<< HEAD
const url = 'http://humboldt4future.sytes.net:4999/entries';
=======
const url = 'http://84.140.93.169:4999/entries';
>>>>>>> 4823d71e556e4b71283e1fde040817c5b0e5b85a

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);