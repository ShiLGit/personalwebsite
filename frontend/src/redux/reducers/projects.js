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

        case actionTypes.UPDATE_PROJECT:
            let newProjsUpdated =[...state.projects];
            console.log("PROJECTS BEFORE UPDATE: ", newProjsUpdated);
            for(let i = 0; i < newProjsUpdated.length; i++){
                console.log(i, "(newprojdupdatestd, actionupdateproj)", newProjsUpdated[i], action.updatedProj)
                if(newProjsUpdated[i].projID === action.updatedProj.projID){
                    let toAdd = {...action.updateProj};
                    newProjsUpdated.splice(i, 1, toAdd);
                }
            }
            console.log("AFTER:", newProjsUpdated);
            return {projects: newProjsUpdated};
        default:
            return state;

    }
    
}

export default reducer;