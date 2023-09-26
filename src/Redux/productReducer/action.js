import { ERROR, LOADING, SUCCESS } from "./actionType"


export const fetchingData = (dispatch)=>{
    dispatch({type:LOADING})
    fetch(`http://localhost:5000/users`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        dispatch({type:SUCCESS,payload : res})
    })
    .catch((err)=>{
        dispatch({type:ERROR})
    })
}