import axios from 'axios'

export function requestGetUsers(){
    return axios.get("/userList")
}

export function requestAddUser(userObj){
    return axios.post("http://localhost:5000/adduser", userObj.value)
}