import axios from 'axios';

const JsonPlaceholderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default JsonPlaceholderInstance;