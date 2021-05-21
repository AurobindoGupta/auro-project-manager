import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect, getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ProjectDetails=(props)=>{
    const { project, auth } = props;
    console.log(props.match.params.id);
    
    const handleDelete=() =>{
        const firestore= getFirebase().firestore()
        firestore.collection('projects').doc(props.match.params.id).delete().then(() =>{
           
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        })
    }
    
    
    if(!auth.uid) return <Redirect to='/signin' />

    if(project){

        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{ moment(project.createdAt.toDate()).calendar() }</div>
                        <button className="right btn red" onClick={handleDelete}>DELETE</button>
                    </div>
                </div>
            </div>
        )
    }

        else{

            return (
                    <div className="container center">
                        <h4 style={{color:"white"}}>Loading project......</h4>
                        <Redirect to='/'/>
                    </div>
                )
        }
     
    
}
const mapStateToProps = (state, ownProps) =>{
    // console.log(state);
    const id= ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null ;
    return{
        project: project ,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
) (ProjectDetails);
