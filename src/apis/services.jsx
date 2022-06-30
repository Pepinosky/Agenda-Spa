import axios from 'axios'
const BASE_URL = 'https://app-apirest2.herokuapp.com'
export default axios.create({
    baseURL: BASE_URL,
    headers: {},
})
