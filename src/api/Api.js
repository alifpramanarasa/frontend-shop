//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://onlineshop.ujungjaya.com/api'
})

export default Api