import { LOGIN_USER, LOGOUT_USER } from "./actiontype"

const initialState = {
    user : null,
}


const rootReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_USER :
            return {
                ...state,
                user : payload
            }
        case LOGOUT_USER : 
        return {
            ...state,
            user : null
        }
        default : return state
    }
}

export default rootReducer