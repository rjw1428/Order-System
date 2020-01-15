import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-order-5692a.firebaseio.com/'
})

export default instance