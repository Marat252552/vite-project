import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const LoginAPI = async(email, password) => {
    let res = await instanse.post('/login', {email: email, password: password})
    return res.status
}
export const TestAPI = () => {
    return instanse.get('/testing')
}

export const LogoutAPI = async () => {
    let res = await instanse.post('/logout')
    return res
}



