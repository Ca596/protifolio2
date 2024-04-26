import styles from './buttonA.module.css'

function buttonA({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default buttonA  