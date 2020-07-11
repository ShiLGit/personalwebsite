import * as actionTypes from '../actions/actionTypes';

const defaultState={
    token: null
}

const reducer = (state=defaultState, action)=>{
    console.log(action.type);
    switch(action.type){
        case actionTypes.UPDATE_TOKEN:
            console.log(action.token)
            return {token: action.token};
    
        case actionTypes.LOGOUT:
            return{token: null};
    }

    return state;
}

export default reducer;