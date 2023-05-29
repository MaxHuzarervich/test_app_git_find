import {useState} from "react";
import "./projectInfo.css"
import {Link} from "react-router-dom";
import star from "./../../assets/star.svg"
import eye from "./../../assets/eye.svg"
import pen from "./../../assets/pen.svg"

export const ProjectInfo = ({project}) => {

    const [comment, setComment] = useState(" Комментарий к проекту"),
        addComment = (e) => {
            setComment(e.currentTarget.value)
        }

    return (
        <div className="project-Container">
            <Link to={`${project.html_url}`}>
                <h5>{project.name}</h5>
            </Link>
            <div className="author">
                <img src={project.owner.avatar_url} alt="avatar"/>
                <Link to={`${project.owner.html_url}`}>
                    <span>
                        {project.owner.login}
                    </span>
                </Link>
            </div>
            <div className="statistics">
                <img src={star} alt={"statistics_star"}/>
                <span>{project.stargazers_count}</span>
                <img src={eye} alt="statistics_eye"/>
                <span>{project.watchers}</span>
            </div>
            <div className="block-comment">
                <input value={comment} onChange={addComment}/>
                <button className="button-comment">
                    <img src={pen} alt="search"/>
                </button>
            </div>
        </div>
    )
}