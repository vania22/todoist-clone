import axios from 'axios';

export const signUp = async (values) => {
    const response = await axios.post('http://localhost:3001/signup', {
        ...values,
    });

    const data = await response.data;

    return data;
};

export const getUserToken = () => {
    return JSON.parse(localStorage.getItem('jwt'));
}