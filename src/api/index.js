import axios from 'axios';

const url = 'http://91.10.201.75:5000/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);