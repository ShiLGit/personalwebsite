import * as actionTypes from './actionTypes';

const updateToken = (token)=>{
    return({
        type: actionTypes.UPDATE_TOKEN,
        token
    })
}

const hi = ()=>{
    return({type: 'test'})
}

export default {updateToken, hi};