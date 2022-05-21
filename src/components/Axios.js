import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://datting-mern-backend-v1.herokuapp.com'
    //'http://localhost:8001'
})

export default Axios;