import * as actionTypes from '../actions/actionTypes';

const defaultState={
    projects: []
}

const reducer =(state=defaultState, action)=>{
    //console.log(actionTypes.INIT_PROJECTS)
    switch(action.type){
        case actionTypes.LOAD_PROJECTS:
            return {
                projects: [...action.projects]
            };

        case actionTypes.REMOVE_PROJECT:
            console.log(action.removeID);
            let newProj = [...state.projects];
            newProj = newProj.filter(p=>{
                if(p.projID === action.removeID)
                    return false;

                return true;
            })
            return{
                projects: newProj
            };
            
        default:
            return state;

    }
    
}

export default reducer;