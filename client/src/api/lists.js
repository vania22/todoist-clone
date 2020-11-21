import axios from 'axios';

import {BASE_URL} from "./constants";
import {getUserTokenFromLocalStorage} from "./authentication";

export const getAllLists = async () => {
    const userToken = getUserTokenFromLocalStorage();

    const response = await axios.get(`${BASE_URL}/lists`, {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    });
    return await response.data
}

export const createList = async (values) => {
    const userToken = getUserTokenFromLocalStorage();

    const response = await axios.post(
        `${BASE_URL}/list`,
        {...values},
        {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });

    return await response.data
}