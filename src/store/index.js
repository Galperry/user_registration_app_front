import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import userReducer from '../reducers/userReducer'
import { watchUser } from '../sagas/userSaga'

const reducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchUser)

export default store