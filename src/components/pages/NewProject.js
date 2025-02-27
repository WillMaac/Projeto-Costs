import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';
function NewProject (){
const history = useHistory()
function createPost(project) {
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects",{
       method: 'POST',
       headers: {
        'Content-type' : 'application/json',
       },
       body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        //Redirect
        history.push('/projects', {menssage: 'Projeto criado com sucesso'}) 
    })
.catch(error => console.log(error))
}

    return (
        <div className= {styles.newproject_container}>
    <h1>Criar projeto</h1>
    <p>Crie seu projeto para depois adicionar os serviços</p>
    <ProjectForm  handleSubmit= {createPost} btnText = "Criar Projeto" />
        </div>
    )
}

export default NewProject;