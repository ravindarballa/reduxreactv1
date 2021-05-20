import { BUY_TABLET } from "../actions/actionTypes";

const initialState={
    numberOfTablets:750
}

export const tabletReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_TABLET:return{numberOfTablets:state.numberOfTablets-1}
        default:return state
    }
}

export default tabletReducer;