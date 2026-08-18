import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputID) => {
    return axios.post('/api/get-all-users', { id: inputID })
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', { data: { id: userId } }
    )
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}
const getAllCodeService = (inputdata) => {
    return axios.get(`/api/allcode?type=${inputdata}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService, getTopDoctorHomeService
}

