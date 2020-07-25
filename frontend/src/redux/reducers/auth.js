import * as actionTypes from '../actions/actionTypes';

const defaultState={
    token: null
}

const reducer = (state=defaultState, action)=>{

    switch(action.type){
        case actionTypes.UPDATE_TOKEN:
            console.log(action.token)
            return {token: action.token};
    
        case actionTypes.LOGOUT:
            return{token: null};

        default:
            return state;
    }

}

export default reducer;