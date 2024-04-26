import styles from '../Section/Project.module.css'
import Card from '../Section/Card'
import ccpx from '../imagem/ccpx.svg'
import challenge01 from '../imagem/challenge01.svg'
import firstlpl from '../imagem/firstlpl.svg'
function Project(){
    return(
        <div className={styles.Project} id="Projetos">
            <h1> Meus projeto</h1>
            <Card
            img={ccpx}
            site="https://lp-dnc-ccxp.vercel.app/"
            />
            <Card
            img={challenge01}
            />
            <Card
            img={firstlpl}
            site="https://meuprojeto1-dnc.netlify.app/"
            />
        </div>
    )
}

export default Project 