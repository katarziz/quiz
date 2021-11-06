import axios from 'axios';

const url = 'http://84.140.93.169:4999/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);