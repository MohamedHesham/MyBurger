import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-7b28b.firebaseio.com/'
});

export default instance;
