import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/actionTypes"


const initialState={
    users:[],
    error:'',
    isLoad:false
  
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST: 
        return{...state,isLoad:true}
        case FETCH_USER_SUCCESS:
        return{isLoad:false, users:action.data, error:''}
        case FETCH_USER_FAIL: 
        return{isLoad:false, users:[], error:action.data}
        default: return state;
    }
}

export default userReducer;