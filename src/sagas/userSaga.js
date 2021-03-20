import {takeLatest} from 'redux-saga/effects'
import { handleAddUser, handleGetUsers } from './handlers/user'
import {ADD_USER, GET_USERS} from '../constants/action-types'


export function* watchUser(){
    yield takeLatest(GET_USERS, handleGetUsers)
    yield takeLatest(ADD_USER, handleAddUser)
}