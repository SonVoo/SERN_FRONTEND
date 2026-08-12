import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputID) => {
    return axios.post('/api/get-all-users', { id: inputID })
}
const handleCreateNewUser = (data) => {
    return axios.post('/api/create-new-user', {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender,
        roleId: data.roleId
    })
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}
export {
    handleLoginApi, getAllUsers, createNewUserService
}

