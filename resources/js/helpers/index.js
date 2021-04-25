import axios from 'axios';
import Vue from 'vue'

const client =  axios.create({
    baseURL:'http://gallery-app/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default client;