import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
function Projects () {

    const location = useLocation()
    let menssage = ''
    if(location.state) {
     menssage = location.state.menssage
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {Message && <Message type= 'sucess' msg = {menssage}/>}
        </div>
    )
}

export default Projects;