import { FETCH_ALL, CREATE } from '../constants/actionTypes.js';
import * as api from '../api';

export const getEntries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEntries();
        
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createEntry = (entry) => async (dispatch) => {
    try {
        const { data } = await api.createEntry(entry);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}