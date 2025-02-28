import styles from './LinkButton.module.css';
import { Link } from 'react-router-dom';

function LinkButton({to, text, customClass}){
    return(
 <Link className={`${styles.btn} ${customClass || ''}`} to={to}>
{text}
</Link>
    )
}

export default LinkButton;