import axios from 'axios';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';
export const pokeAPI = axios.create({
    baseURL: POKE_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})