import { SET_USERS, HANDLE_MESSAGE} from '../constants/action-types'

const initialState = {
    users: null,
    errMsg: null,
    msg: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS:{
            return {...state, users: action.users, msg:"",errMsg:""}
        }
        case HANDLE_MESSAGE:{
            if (action.msg.success){
                return {...state,msg:action.msg.msg, errMsg:""}
            }
            else if (action.msg.error){
                return {...state,msg:"",errMsg:action.msg.msg}
            }
            break;
        }
        default:{
            return state
        }
    }
}

export default userReducer