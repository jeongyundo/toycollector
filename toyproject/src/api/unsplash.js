import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 57o_6FJMecw4z6VZHbFoBDBZ_zUY-Vn-rWJuX8R57uI'
    }
})