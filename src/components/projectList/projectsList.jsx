import {ProjectInfo} from "../projectInfo/projectInfo";
import "./projectList.css"

export const ProjectsList = ({projects}) => {
    return <div className={"container-projects"}>
        {projects.map(pr => (
            <div key={pr.id}><ProjectInfo project={pr}/></div>
        ))}
    </div>

}