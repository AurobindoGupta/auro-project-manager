import React from 'react'

const ProjectDetails=(props)=>{
    const id= props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in efficitur arcu, quis convallis nisl. Sed viverra consectetur iaculis. Quisque vel ipsum mi. Phasellus quam libero, condimentum eu varius non, fermentum eu metus. Donec hendrerit velit dui. In tortor massa, hendrerit in enim vitae, feugiat dapibus ante. Nulla consectetur vestibulum ipsum vitae volutpat. Proin id sapien sit amet ligula viverra varius.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the AG</div>
                    <div>19may, 12am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
