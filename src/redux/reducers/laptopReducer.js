import { BUY_LAPTOP } from "../actions/actionTypes"

const initialState={
    numberOfLaptops:500
}
const laptopReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_LAPTOP: return {numberOfLaptops: state.numberOfLaptops-1}
        default: return state
    }

}

export default laptopReducer;