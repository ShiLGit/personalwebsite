import * as actionTypes from '../actions/actionTypes';

const defaultState={
    projects: []
}

const reducer =(state=defaultState, action)=>{
    //console.log(actionTypes.INIT_PROJECTS)
    switch(action.type){
        case actionTypes.INIT_PROJECTS:
            return {
                projects: [...action.projects]
            };
        default:
            return state;

    }
    
}

export default reducer;