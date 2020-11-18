import axios from 'axios';

import {BASE_URL} from "./constants";

export const signUp = async (values) => {
    const response = await axios.post(`${BASE_URL}/signup`, {
        ...values,
    });
    return await response.data;
};

export const signIn = async (values) => {
    const response = await axios.post(`${BASE_URL}/signin`, {
        ...values
    })
    return await response.data
}

export const getUserTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('jwt'));
}

export const setUserTokenToLocalStorage = (token) => {
    localStorage.setItem('jwt', JSON.stringify(token));
}