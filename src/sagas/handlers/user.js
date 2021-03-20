import {call, put} from 'redux-saga/effects'
import { setUsers , handleMessage} from '../../actions';
import { requestGetUsers , requestAddUser } from '../requests/user'

export function* handleGetUsers(){
    try {
        const response = yield call(requestGetUsers)
        const data = response.data;
        yield put(setUsers(data))

    } catch (error) {
        console.log(error)
    }
}

export function* handleAddUser(userObj){
    console.log(userObj)
    try {
        const response = yield call(requestAddUser,userObj)
        const data = response.data
        yield put(handleMessage(data))
    }
    catch (error){
        console.log(error)
    }
}