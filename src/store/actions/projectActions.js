export const createProject =(project) =>{
    return(dispatch, getState, { getFirebase, getFirestore }) =>{
        //make a call to database
        dispatch({type:'CREATE_PROJECT', project: project});
    }
};