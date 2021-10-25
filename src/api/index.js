import axios from 'axios';

const url = 'http://91.9.66.249:4999/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);