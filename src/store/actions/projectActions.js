export const createProject =(project) =>{//pausing dispatch to update project details
    return(dispatch, getState, getFirebase ) =>{
        //make a call to database
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Auro',
            authorLastName: 'Gupta',
            authorID: '12345',
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project: project});

        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

        
    }
};