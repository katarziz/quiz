import axios from 'axios';

const url = 'http://91.9.65.139:4999/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);