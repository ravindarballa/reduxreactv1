import {BUY_LAPTOP, BUY_MOBILE, BUY_TABLET, FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./actionTypes";
import axios from 'axios';

export const buyLaptop=()=>{
    return{
        type:BUY_LAPTOP
    }
}

export const buyMobile=()=>{
    return{
        type:BUY_MOBILE
    }
}

export const buyTablet=()=>{
    return{
        type:BUY_TABLET
    }
}

export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        data:users
    }
}

export const fetchUserFail=()=>{
    return{
        type:FETCH_USER_FAIL
    }
}

export const fetchUsers=()=>{
    return function(dispatch){
        console.log("fetchUser")
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            let users =  response.data.map(user=>user.id)
            console.log(users)
            dispatch(fetchUserSuccess(users))  
        })
        .catch(error=>{
            dispatch(fetchUserFail(error))
          }
            
        );

    }
}