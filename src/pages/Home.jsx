import Header from '../components/Header'
import styles from '../style/pages/home.module.css'

import homeIMG from '../assets/home.png'
import plant from '../assets/plantando.png'

const Home = () => {
  return (
    <>
      <Header
        title="Preservação e Manutenção"
        text='RefloreSer é dedicada a manutenção e restauração da flora e fauna brasileira, atuando
        principalmente em regiões com altos indices de desmatamento e queimadas.'
        image={homeIMG}
      />

      <div className={styles.homeContainer}>
        <div className={styles.mainDesc}>
          <h1 className={styles.homeTitle}>Nosso foco de atuação</h1>
          <div className={styles.containerHome}>
            <div className={styles.cardHome}>
              <img width="64" height="64" src="https://img.icons8.com/wired/64/greenhouse.png" alt="greenhouse" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Area Residencial</h5>
              <p className={styles.cardText}>Casa, condominios, chácaras e sitios.</p>
            </div>

            <div className={styles.cardHome}>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/online-store.png" alt="online-store" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Area Comercial</h5>
              <p className={styles.cardText}>Empresas, comercios e shoppings.</p>
            </div>

            <div className={styles.cardHome}>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/creek.png" alt="creek" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Limpeza de águas</h5>
              <p className={styles.cardText}>Limpeza e conservação de rios, lagos e nascentes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardMore}>
        <div className={styles.cardDesc}>
          <img className={styles.descImage} src={plant} alt="" />
          <div className={styles.cardInfo}> 
          <h1>Vamos ajudar a deixar o mundo mais verde!</h1>
            <p className={styles.descText}>
              Reflorestamento é uma solução poderosa para
              enfrentar uma série de desafios ambientais, desde a mitigação das
              mudanças climáticas até a conservação da biodiversidade e a melhoria da
              qualidade de vida das pessoas. Para alcançar resultados significativos,
              é essencial o engajamento e a colaboração de governos, organizações não governamentais,
              setor privado e comunidades locais, trabalhando em conjunto para
              restaurar e proteger nossas florestas.</p>
            <a href="./sobre"  role='button' className={styles.descBTN}>Saiba Mais</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home