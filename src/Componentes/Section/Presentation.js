import styles from './Presentation.module.css'
import buttonA from '../element/buttonA'
function Presentation(){
    return(
        <div className={styles.presentation} id="Present">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá,Sou</h1> <span></span>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como Dev full-stack,<br/>
             eu tenho o compromisso de resolver problemas complexos e trazer resultados excepcionais para os negócios.
              sempre em busca de novos desafios para superar.
              </p>
              <buttonA text='Botão A '/> 
           </div>

    )
}

export default Presentation 
