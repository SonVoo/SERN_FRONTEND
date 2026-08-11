import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputID) => {
    return axios.post('/api/get-all-users', { id: inputID })
}
export {
    handleLoginApi, getAllUsers
}

