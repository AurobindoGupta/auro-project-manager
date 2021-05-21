export const createProject =(project) =>{//pausing dispatch to update project details
    return(dispatch, getState, getFirebase ) =>{
        //make a call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project: project});

        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

        
    }
};