import {GET_USERS, SET_USERS, ADD_USER, HANDLE_MESSAGE} from '../constants/action-types'


export const getUsers = () => ({
    type: GET_USERS
})

export const setUsers = (userList) => ({
    type: SET_USERS,
    users: userList
})

export const addUser = (userObj) => ({
    type: ADD_USER,
    value:userObj
})

export const handleMessage = (msgObj) => ({
    type:HANDLE_MESSAGE,
    msg: msgObj
})