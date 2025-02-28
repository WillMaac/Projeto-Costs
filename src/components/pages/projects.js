import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
import Container from '../layouts/Container';
import LinkButton from '../layouts/LinkButton';
import styles from './Project.module.css';


function Projects () {

    const location = useLocation()
    let menssage = ''
    if(location.state) {
     menssage = location.state.menssage
    }

    return(
        <div className= {styles.project_container}>
        <div className= {styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to = '/newproject' text = 'Criar Ptojeto'/>
            </div>
            {Message && <Message type= 'sucess' msg = {menssage}/>}
            <Container customClass = 'start'>
            <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects;