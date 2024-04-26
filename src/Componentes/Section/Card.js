import styles from '../Section/Card.module.css'


function Card({img, site}){
    return(
        <div className={styles.Card}>
            <a href={site}>
                <img src={img} alt='ERRO'/>
            </a>
        </div>
    )
}

export default Card