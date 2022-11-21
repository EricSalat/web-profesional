import React from "react";
import "./Project.css";
import { FcOpenedFolder } from "react-icons/fc";
import { RiShareBoxLine, RiGithubLine } from "react-icons/ri";

function Project(props) {
    return(
      <div>
        <div className="project-card">
          <header className="project-top">
            <FcOpenedFolder/>
            <a href={props.link}>
              <RiGithubLine />
            </a>
          </header>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <footer>
            <ul>
              <li>{props.tech}</li>
              <li>{props.tech2}</li>
            </ul>
          </footer>
        </div>
      </div>
    );
}


export default Project;