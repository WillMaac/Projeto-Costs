import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
import Container from '../layouts/Container';
import ProjectCard from "../project/projectCard";
import LinkButton from '../layouts/LinkButton';
import styles from './Project.module.css';
import styles2 from '../layouts/LinkButton.module.css';
import { useState, useEffect } from "react";


function Projects () {
const [projects, setProjects] = useState([])

    const location = useLocation()
    let menssage = ''
    if(location.state) {
     menssage = location.state.menssage
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects', {
            method:  'GET',
            headers: {
                 'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setProjects(data)
        })
        .catch((error) => console.log(error));   
    }, [])

    return(
        <div className= {styles.project_container}>
        <div className= {styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton customClass= {styles2.right} to = '/newproject' text = 'Criar Ptojeto'/>
            </div>
            {Message && <Message type= 'sucess' msg = {menssage}/>}
            <Container customClass = 'start'>
            {projects.length > 0 && 
            projects.map((project) => <ProjectCard 
            id = {project.id}
            name = {project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id} 
            />)}
            </Container>
        </div>
    )
}

export default Projects;