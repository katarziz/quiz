import axios from 'axios';

const url = process.env.SERVERURL;

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);