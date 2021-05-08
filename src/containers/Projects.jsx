import React from 'react';
import ProjectTitle from "../components/ProjectTitle";
import {ProjectBgColor} from "../styles/ProjectStyled";
import Cards from "./Cards";

const Projects = (props) => {
 return (
     <>
         <ProjectBgColor>
             <ProjectTitle />
             <Cards />
         </ProjectBgColor>
     </>
 )
};

export default Projects;