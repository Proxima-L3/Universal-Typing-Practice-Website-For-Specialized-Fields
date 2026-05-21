import axios from 'axios';

import { backendURL } from '/src/utils/constants.jsx';

export const api = axios.create({
    baseURL: `${backendURL}`,
    withCredentials: true,
});

export default api;