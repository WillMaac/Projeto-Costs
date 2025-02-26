import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer(){
    return (<footer className= {styles.footer}>
            <ul className= {styles.social_list}>
                <li>
                    <FaFacebook size={30} color="#1877F2"/>
                </li>

                <li>
                    <FaInstagram  size={30} color="#E1306C"/>
                </li>

                <li>
                    <FaLinkedin size={30} color="#0A66C2" />
                </li>
                </ul>
                <p className={styles.copy_right}><span>Costs</span> &copy; 2025
                </p>
        </footer>
    )
}

export default Footer;