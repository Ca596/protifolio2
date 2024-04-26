import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import styles from '../Section/Footer.module.css'
function Footer(){
    return(
        <div className={styles.Footer}>
          <ul>
                <li><a href='https://www.instagram.com/dudusantos009?igsh=c3VwZTZkaHExaGow'><FaInstagram/></a></li>
                <li><a href='https://github.com/dashboard'><FaGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/carlos-luiz-b44b75268/'><FaLinkedin/></a></li>
            </ul>
            <p>Carloseduardo.bm2001@gmail.com</p>
            <p>Carlos eduardo © 2023</p>
        </div>
    )
}

export default Footer 