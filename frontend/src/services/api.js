import axios from 'axios';
const apiurl="http://localhost:4000/api/v1";

export function register1(register)
{
    return axios.post(apiurl+"/register",register);
}

export function login1(login)
{
    return axios.post(apiurl+"/login",login);
}


