import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Present'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#habi'>Habilidade</Nav.Link></li>
                <li><Nav.Link href='#Projetos'>Projects</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/dudusantos009?igsh=c3VwZTZkaHExaGow'><FaInstagram/></a></li>
                <li><a href='https://github.com/dashboard'><FaGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/carlos-luiz-b44b75268/'><FaLinkedin/></a></li>
            </ul>
        </div>
    )
}

export default Navbar   