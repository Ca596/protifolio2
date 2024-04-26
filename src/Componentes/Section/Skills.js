import styles from './Skills.module.css'
import javascript from '../imagem/javascript.svg'
import html from '../imagem/html.svg'
import css from '../imagem/css.svg'
import react from '../imagem/react.svg'


function Skills(){
    return(
        <div className={styles.Skills} id="habi"> 
            <h1>Habilidade</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills