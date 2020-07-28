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
        
        case actionTypes.ADD_PROJECT:
            for(let i = 0; i < state.projects.length; i++){
                if(state.projects[i].projName === action.toAdd.projName){
                    return state;
                }
            }
            const newProjs = [...state.projects];
            newProjs.push(action.toAdd);
            return {projects: newProjs};
        default:
            return state;

    }
    
}

export default reducer;